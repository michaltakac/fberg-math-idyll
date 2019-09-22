const React = require("react");

class HeaderWithInfo extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<${this.props.tag || "h1"}>${
            this.props.children
          } <img src="https://matematika.fberg.tuke.sk/zosit1/static/info-icon.jpg" alt="" style="width: 15px;display: inline-block; margin-bottom: -1px;" /></${this
            .props.tag || "h1"}>`,
        }}
      />
    );
  }
}

module.exports = HeaderWithInfo;
