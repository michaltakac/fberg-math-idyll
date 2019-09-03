module.exports = [
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
    animation: {
      zoom: {
        xDomain: [-20, 20],
        yDomain: [-20, 20],
      },
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
    animation: {
      zoom: {
        xDomain: [-10, 10],
        yDomain: [-10, 10],
      },
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
        range: [0.00001, 500],
        color: "blue",
      },
      {
        fn: "x * exp(1/x)",
        range: [-500, -0.00001],
        color: "blue",
      },
    ],
    animation: {
      zoom: {
        xDomain: [-5, 5],
        yDomain: [-5, 5],
      },
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
    animation: {
      zoom: {
        xDomain: [-10, 10],
        yDomain: [-10, 10],
      },
    },
  },
  // 5
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "f(x)",
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
        graphType: "interval",
        color: "red",
      },
    ],
    animation: {
      zoom: {
        xDomain: [-10, 10],
        yDomain: [-10, 10],
      },
    },
  },
  {
    plotSettings: {
      tip: {
        xLine: true,
        yLine: true,
        render: () => "f(x)",
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
        graphType: "interval",
        color: "red",
      },
      {
        points: [
          [1, 0],
          [1, 0],
        ],
        fnType: "points",
        graphType: "scatter",
        title: "f(x)",
        attr: {
          "stroke-width": 10
        }
      },
    ],
    animation: {
      zoom: {
        xDomain: [-10, 10],
        yDomain: [-10, 10],
      },
    },
  },

  {
    plotSettings: {},
    plotData: [
      {
        fn: "x * exp(1/x)",
        graphType: "interval",
        color: "blue",
        skipTip: true,
      },
      {
        fn: "x^2",
        graphType: "interval",
        color: "green",
        skipTip: true,
      },
      {
        fn: "sin(x^2) + cos(x^2)",
        graphType: "interval",
        color: "red",
        skipTip: true,
      },
    ],
    animation: {
      zoom: {
        xDomain: [-14, 25],
        yDomain: [-25, -1],
      },
    },
  },
];
