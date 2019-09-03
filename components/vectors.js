const React = require("react");
const D3Component = require("idyll-d3-component");
const d3 = require("d3");
const functionPlot = require("idyll-function-plot");

class Vectors extends D3Component {
  initialize(node, props) {
    const div = d3.select(node).append("div");
    div
      .attr("id", "vector")
      .style("width", "40%")
      .style("height", "auto");

    functionPlot({
      target: "#vector",
      grid: true,
      data: [
        {
          vector: [props.x, props.y],
          graphType: "polyline",
          fnType: "vector",
        },
        { fn: 'sqrt(1 - x * x)' },
    { fn: '-sqrt(1 - x * x)' }
      ],
    });
  }

  update(props, oldProps) {
    functionPlot({
      target: "#vector",
      grid: true,
      data: [
        {
          vector: [props.x, props.y],
          graphType: "polyline",
          fnType: "vector",
        },
      ],
    });
  }
}

module.exports = Vectors;
