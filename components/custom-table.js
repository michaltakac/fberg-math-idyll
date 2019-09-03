const React = require("react");

class CustomTable extends React.Component {
  render() {
    return (
      <table {...this.props}>
        {this.props.children}
      </table>
    );
  }
}

module.exports = CustomTable
