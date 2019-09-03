const React = require("react");
const D3Component = require("idyll-d3-component");
const d3 = require("d3");
const functionPlot = require("idyll-function-plot");
const data = require("../data");

let instance = null;

class PriebehFunkcie extends D3Component {
  initialize(node, props) {
    const div = d3.select(node).append("div");
    div
      .attr("id", "quadratic")
      .style("width", "100%")
      .style("height", "auto")
      .style("margin-top", "40px");

    if (!instance && data[0].plotSettings) {
      instance = functionPlot({
        target: "#quadratic",
        width: window.innerWidth / 2 - 100,
        height: window.innerWidth / 2 - 100,
        grid: true,
        yAxis: { domain: [-10, 10] },
        xAxis: { domain: [-10, 10] },
        data: data[0].plotData,
        ...data[0].plotSettings,
      });
    }
  }

  update(props, oldProps) {
    document.getElementById("quadratic").innerHTML = "";
    instance = null;
    console.log(instance);
    console.log("terajsi step:", props.step);
    console.log("starsi step:", oldProps.step);
    console.log(props);
    const step = props.step;
    const d = data[step || 0];
    if (props.step !== oldProps.step && d.plotSettings) {
      instance = functionPlot({
        target: "#quadratic",
        width: window.innerWidth / 2 - 100,
        height: window.innerWidth / 2 - 100,
        grid: true,
        xAxis: {
          domain: data[oldProps.step].animation.zoom.xDomain
        },
        yAxis: {
          domain: data[oldProps.step].animation.zoom.yDomain
        },
        data: d.plotData,
        ...d.plotSettings,
        tip: {
          ...d.plotSettings.tip,
          renderer: (x, y, index) => {
            const { tip } = d.plotSettings;
            // the returning value will be shown in the tip
            if (tip && tip.render) {
              return tip.render(x, y, index);
            }
          },
        },
      });

      if (d.animation) {
        instance.programmaticZoom(d.animation.zoom.xDomain, d.animation.zoom.yDomain);
      }
      // instance.drawGraphWrapper()
    }
  }
}

module.exports = PriebehFunkcie;
