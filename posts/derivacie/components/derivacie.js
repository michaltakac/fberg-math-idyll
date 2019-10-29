const React = require("react");
const D3Component = require("idyll-d3-component");
const d3 = require("d3");
const functionPlot = require("idyll-function-plot");
const data = require("../data");
const { Observable, from, of, fromEvent } = require("rxjs");
const { delay, tap, mergeMap, concatMap, repeat, takeUntil, takeWhile } = require("rxjs/operators");

let instance = null;
let lastStep = null;

class Derivacie extends D3Component {
  initialize(node, props) {
    const div = d3.select(node).append("div");
    div
      .attr("id", "deriv1")
      .style("width", "370px")
      .style("height", "auto")
      .style("float", "left")
      .style("display", "inline-block")
      .style("margin-top", "40px");

    const linkedGraph = d3.select(node).append("div");
    linkedGraph
      .attr("id", "linked-graph")
      .style("width", "370px")
      .style("height", "auto")
      .style("display", "inline-block")
      .style("margin-top", "40px");

    if (!instance && data[0].plotSettings) {
      instance = functionPlot({
        target: "#deriv1",
        width: 370, //window.innerWidth / 2 - 100,
        height: 350, //window.innerWidth / 2 - 100,
        grid: true,
        xAxis: {domain: [-6, 6]},
        yAxis: { domain: [-6, 6] },
        data: [{ fn: '5 / (1 + x^2)', derivative: {
          fn: '-((10 * x) / (1 + x^2)^2)',
          updateOnMouseMove: true
        } }]
      });
      const anotherGraph = functionPlot({
        target: '#linked-graph',
        width: 370, //window.innerWidth / 2 - 100,
        height: 350,
        grid: true,
        xAxis: {domain: [-6, 6]},
        yAxis: { domain: [-6, 6] },
        data: [{ fn: '5 / (1 + x^2)', derivative: {
          fn: '-((10 * x) / (1 + x^2)^2)',
          updateOnMouseMove: true
        } }]
      })
      instance.addLink(anotherGraph)
      anotherGraph.addLink(instance)
    }
  }

  update(props, oldProps) {
    document.getElementById("deriv1").innerHTML = "";
    instance = null;

    const step = props.step;
    const d = data[step || 0];
    if (d.plotSettings) {
      lastStep = oldProps.step;
      instance = functionPlot({
        target: "#deriv1",
        width: window.innerWidth / 2 - 100,
        height: window.innerWidth / 2 - 100,
        grid: true,
        xAxis: {
          domain: data[oldProps.step].zoom.xDomain,
        },
        yAxis: {
          domain: data[oldProps.step].zoom.yDomain,
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

      if (d.zoom) {
        instance.programmaticZoom(d.zoom.xDomain, d.zoom.yDomain);
      }

      if (d.animation) {
        // const anim = Observable.create(obs => {
        //   obs.next(d.animation.steps);
        //   obs.complete();
        // }).pipe(
        //   delay(d.animation.delay || 0),
        //   tap(step => console.log("starting animation step ", step, props.step2animstate)),
        //   mergeMap(x => from(x)),
        //   concatMap(step => of(step).pipe(delay(step.delay || 0))),
        //   repeat(10),
        //   takeWhile(_ => lastStep !== props.step)
        // );
        // anim.subscribe(step => instance.programmaticZoom(step.zoom.xDomain, step.zoom.yDomain));
      }
    }

    // Custom triggers, todo: modularize
    // if (step === 5) {
    //   instance.options.data[0].attr = {
    //     "stroke-width": props.highlight === "step-5_top-eq" ? 3 : 1,
    //   };

    //   instance.options.data[1].attr = {
    //     "stroke-width": props.highlight === "step-5_bottom-eq" ? 3 : 1,
    //   };

    //   instance.options.data[2].attr = {
    //     "stroke-width": props.highlight === "step-5_top-eq" ? 3 : 1,
    //   };

    //   instance.options.data[3].attr = {
    //     "stroke-width": props.highlight === "step-5_top-eq" ? 3 : 1,
    //   };

    //   instance.options.data[4].attr = {
    //     "stroke-width": props.highlight === "step-5_bottom-eq" ? 3 : 1,
    //   };

    //   instance.options.data[5].attr = {
    //     "stroke-width": props.highlight === "step-5_top-eq" ? 3 : 1,
    //   };

    //   instance.draw();
    // }

    // if (step === 8) {
    //   instance.options.data[2].attr = {
    //     "stroke-width": props.highlight === "step-8_left-eq" ? 3 : 1,
    //   };

    //   instance.options.data[3].attr = {
    //     "stroke-width": props.highlight === "step-8_right-eq" ? 3 : 1,
    //   };

    //   instance.draw();
    // }
  }
}

module.exports = Derivacie;
