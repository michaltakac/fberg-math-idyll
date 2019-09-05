module.exports = [
  {
    step: 1,
    plotSettings: {},
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
    ],
    zoom: {
      xDomain: [-20, 20],
      yDomain: [-20, 20],
    },
  },
  {
    plotSettings: {},
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
    ],
    zoom: {
      xDomain: [-10, 10],
      yDomain: [-10, 10],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render(x, y, index) {
          return `[${parseFloat(x).toFixed(2)}, ${parseFloat(y).toFixed(2)}]`;
        },
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.001, 500],
        color: "blue",
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.001],
        color: "blue",
      },
    ],
    zoom: {
      xDomain: [-50, 50],
      yDomain: [-50, 50],
    },
    animation: {
      type: "loop",
      steps: [
        {
          duration: 2000,
          delay: 2000,
          zoom: {
            xDomain: [-50, 50],
            yDomain: [-50, 50],
          },
        },
        {
          duration: 2000,
          delay: 2000,
          zoom: {
            xDomain: [-2, 2],
            yDomain: [-50, 50],
          },
        },
      ],
    },
  },
  // 4
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "y = x + 1",
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x + 1",
        color: "#ff00aa",
        attr: {
          "stroke-width": 1,
        },
      },
    ],
    zoom: {
      xDomain: [-5, 5],
      yDomain: [-10, 10],
    },
  },
  // 5
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "f'(x)",
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
        derivative: {
          fn: "(exp(1/x) * (x - 1)) / x",
          updateOnMouseMove: true,
        },
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [-500, -0.00001],
        graphType: "interval",
        color: "#950028",
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [0.00001, 500],
        graphType: "interval",
        color: "#950028",
      },
    ],
    zoom: {
      xDomain: [-10, 10],
      yDomain: [-10, 10],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "f'(x)",
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [-500, -0.00001],
        graphType: "interval",
        color: "#950028",
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [0.00001, 500],
        graphType: "interval",
        color: "#950028",
      },
      {
        points: [[1, 0], [1, 0]],
        fnType: "points",
        graphType: "scatter",
        title: "f(x)",
        color: "orange",
        attr: {
          "stroke-width": 10,
        },
      },
    ],
    zoom: {
      xDomain: [-10, 10],
      yDomain: [-10, 10],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "f'(x)",
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [-500, -0.00001],
        graphType: "interval",
        color: "#950028",
      },
      {
        fn: "(exp(1/x) * (x - 1)) / x",
        range: [0.00001, 500],
        graphType: "interval",
        color: "#950028",
      },
      {
        points: [[1, 0], [1, 0]],
        fnType: "points",
        graphType: "scatter",
        title: "f(x)",
        color: "orange",
        attr: {
          "stroke-width": 10,
        },
      },
    ],
    zoom: {
      xDomain: [-10, 10],
      yDomain: [-10, 10],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => `f"(x)`,
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [-500, -0.001],
        graphType: "polyline",
        color: "#006762",
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [0.001, 500],
        graphType: "polyline",
        color: "#006762",
      },
    ],
    zoom: {
      xDomain: [-4, 4],
      yDomain: [-4, 4],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => `f"(x)`,
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [-500, -0.001],
        graphType: "polyline",
        color: "#006762",
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [0.001, 500],
        graphType: "polyline",
        color: "#006762",
      },
    ],
    zoom: {
      xDomain: [-6, 6],
      yDomain: [-6, 6],
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => `f"(x)`,
      },
    },
    plotData: [
      {
        fn: "x * exp(1/x)",
        range: [0.00001, 500],
        color: "blue",
        skipTip: true,
        attr: {
          "stroke-width": 0.5
        }
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
        skipTip: true,
        attr: {
          "stroke-width": 0.5
        }
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [-500, -0.001],
        graphType: "polyline",
        color: "#006762",
        attr: {
          "stroke-width": 1
        }
      },
      {
        fn: "(exp(1/x) / x^3)",
        range: [0.001, 500],
        graphType: "polyline",
        color: "#006762",
        attr: {
          "stroke-width": 1
        }
      },
    ],
    zoom: {
      xDomain: [-6, 6],
      yDomain: [-6, 6],
    },
  },
];
