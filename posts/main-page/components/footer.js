const React = require('react');
const IdyllComponent = require('idyll-component');

class Footer extends IdyllComponent {
  render() {
    return (
      <p>
        <br/>
        <br/>
        &copy; {new Date().getFullYear()} FBERG TUKE
      </p>
    );
  }
}

module.exports = Footer;
