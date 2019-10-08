const React = require("react");
const ReactGA = require("react-ga");
const AuthForm = require("./auth-form");

class Page extends React.Component {
  state = {
    isAuthorized: false,
  };
  componentDidMount() {
    if (typeof window !== "undefined" && !this.state.isAuthorized) {
      const fbergMath1Auth = localStorage.getItem("fbergMath1Auth");
      const auth = JSON.parse(fbergMath1Auth);

      if (auth && auth.uid) {
        ReactGA.initialize("UA-39924303-3", {
          debug: true,
          gaOptions: {
            name: this.props.name || "FBERG TUKE - Matematika 1",
            siteSpeedSampleRate: 100,
            userId: auth.uid,
          },
        });
        ReactGA.pageview(window.location.pathname + window.location.search);

        const nowInMs = new Date().getTime();

        if (auth.loginTime + auth.expiresIn > nowInMs) {
          this.setState({ isAuthorized: true });
        }
      }
    }
  }
  render() {
    if (!this.state.isAuthorized) {
      return <AuthForm />;
    }

    return <div>{this.props.children}</div>;
  }
}

module.exports = Page;
