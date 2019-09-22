const React = require("react");
const AuthForm = require("./auth-form")
const Footer = require("./footer")

class Page extends React.Component {
  state = {
    isAuthorized: false
  }
  componentDidMount() {
    if (typeof window !== "undefined" && !this.state.isAuthorized) {
      const fbergMath1Auth = localStorage.getItem("fbergMath1Auth")
      const auth = JSON.parse(fbergMath1Auth)

      console.log(auth)
      if (auth && auth.uid) {
        const nowInMs = new Date().getTime();
        console.log(auth.loginTime + auth.expiresIn)
        console.log(nowInMs)
        if (auth.loginTime + auth.expiresIn > nowInMs) {
          this.setState({ isAuthorized: true })
        }
      }
    }
  }
  render() {
    if (!this.state.isAuthorized) {
      return <section className="article-body"><AuthForm /></section>
    }

    return (
      <section className="article-body">
        <h1 style={{ marginBottom: "-35px"}}>Matematika 1</h1>
        <h2>FBERG TUKE</h2>

        <p>Odkazy na jednotlivé témy budú pridávané postupne počas semestra.</p>

        <Footer />
      </section>
    );
  }
}

module.exports = Page;
