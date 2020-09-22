const React = require("react");
const Footer = require("./footer")

class AuthForm extends React.Component {
  state = {
    username: null,
    password: null,
    error: null,
    isExternal: false,
  };
  toggleExternalForm = e => {
    this.setState({
      ...this.state,
      isExternal: !this.state.isExternal,
    });
  };
  handleUsernameChange = e => {
    this.setState({
      ...this.state,
      username: e.target.value,
    });
  };
  handlePwdChange = e => {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { username, password } = this.state;

    fetch(`https://matematika.fberg.tuke.sk/api/v1/check-student-exists.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        this.setState({
          ...this.state,
          error: "Skontrolujte prihlasovacie meno a heslo. Uživateľ s týmito údajmi neexistuje.",
        });
        return Promise.reject(response);
      })
      .then(data => {
        if (data.count !== 0) {
          const uid = data[0].uid[0];
          const auth = {
            uid,
            loginTime: new Date().getTime(),
            expiresIn: 2629746000, // 1 mesiac
          };

          localStorage.setItem("fbergMath1Auth", JSON.stringify(auth));
          this.setState({
            username: null,
            password: null,
            error: null,
          });

          window.location.reload(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleExternalSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { username, password } = this.state;

    if (username !== "sekerak") {
      this.setState({
        ...this.state,
        error: "Skontrolujte prihlasovacie meno. Uživateľ s týmito údajmi neexistuje.",
      });
      return false;
    }

    if (password !== "tukefberg") {
      this.setState({
        ...this.state,
        error: "Heslo nie je správne.",
      });
      return false;
    }

    const auth = {
      uid: "external01",
      loginTime: new Date().getTime(),
      expiresIn: 2629746000, // 1 mesiac
    };

    localStorage.setItem("fbergMath1Auth", JSON.stringify(auth));
    this.setState({
      username: null,
      password: null,
      error: null,
    });

    window.location.reload(false);
  };
  render() {
    return (
      <section className="auth-body">
        <h1 style={{ marginBottom: "-35px" }}>Matematika 1</h1>
        <h2>FBERG TUKE</h2>

        <input type="checkbox" value={this.state.isExternal} onChange={this.toggleExternalForm} /> Externý užívateľ?

        {this.state.isExternal ? (
          <form onSubmit={this.handleExternalSubmit} className="auth-form">
          <div>
            <label>
              Prihlasovacie meno:
            </label>
            <input name="username" type="text" onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label>Heslo:</label>
            <input name="pwd" type="password" onChange={this.handlePwdChange} />
          </div>
          <div>
            <button type="submit">Prihlásiť sa</button>
          </div>
          <div style={{ marginTop: "30px" }}>{this.state.error}</div>
        </form>
        ) : (
        <form onSubmit={this.handleSubmit} className="auth-form">
          <div>
            <label>
              Jedinečný login
              <br />
              (cez rovnaký sa prihlasuješ do MAISu):
            </label>
            <input name="username" type="text" placeholder="V tvare ab123xy" onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label>Heslo:</label>
            <input name="pwd" type="password" onChange={this.handlePwdChange} placeholder="Heslo do MAISu" />
          </div>
          <div>
            <button type="submit">Prihlásiť sa</button>
          </div>
          <div style={{ marginTop: "30px" }}>{this.state.error}</div>
        </form>
        )}

        <Footer />
      </section>
    );
  }
}

module.exports = AuthForm;
