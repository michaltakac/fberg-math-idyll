const React = require('react');

class TooltipLink extends React.Component {
  render() {
    const { children, dataFor, ...props } = this.props;
    return (
        <a data-tip data-for={dataFor} {...props}>
          {children}
        </a>
    );
  }
}

module.exports = TooltipLink;
