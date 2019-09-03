const React = require("react");
const D3Component = require("idyll-d3-component");
const d3 = require("d3");
const functionPlot = require("idyll-function-plot");
const { derivative } = require("mathjs")

class Graph extends D3Component {
  initialize(node, props) {
    console.log(props)
    const div = d3.select(node).append('div');
    div.attr('id', "quadratic")
      .style('width', '100%')
      .style('height', 'auto');

    functionPlot({
      target: "#quadratic",
      data: [
        {
          fn: "x^2",
          derivative: {
            fn: '2 * x',
            updateOnMouseMove: true
          }
        },
      ],
    });
  }

  update(props, oldProps) {
    console.log(props)
    const deriv = derivative(`x^${props.exp || 2}`, 'x')
    props.updateProps({ derivative: deriv.toString(), derivativeTex: deriv.toTex() })
    functionPlot({
      target: "#quadratic",
      data: [
        {
          fn: `x^${props.exp || 2}`,
          derivative: {
            fn: props.derivative,
            updateOnMouseMove: true
          }
        },
      ],
    });
  }
}

module.exports = Graph;
