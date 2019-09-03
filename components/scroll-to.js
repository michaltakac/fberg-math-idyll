const React = require('react');

class ScrollTo extends React.Component {
  render() {
    return (
      <div className={'scroll-to'}>
        <a href={this.props.destination.includes('#') ? this.props.destination : `#${this.props.destination}`}>
          Scroll ďalej...
        </a>
      </div>
    );
  }
}

module.exports = ScrollTo;
