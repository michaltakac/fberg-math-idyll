const React = require("react");

class HeaderWithMultipleTooltips extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<${this.props.tag || "h1"}>${this.props.pre || ""}${this.props.parts.map((part, index) => `
              <a data-tip data-for=${this.props.dataFor[index]}>
                ${part}
              </a>
              <img
                src="https://matematika.fberg.tuke.sk/zosit1/static/info-icon.jpg"
                alt=""
                style="width: 15px;display: inline-block; margin-bottom: -1px; padding-right: 3px;"
              />
            `
          ).join('')}${this.props.post}</${this.props.tag || "h1"}>`,
        }}
      />
    );
  }
}

module.exports = HeaderWithMultipleTooltips;
