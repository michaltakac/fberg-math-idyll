const React = require('react');

class Matrix2D extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div>
        {`[${props.x || 0}, ${props.x || 0}]`}
      </div>
    );
  }
}

module.exports = Matrix2D;
