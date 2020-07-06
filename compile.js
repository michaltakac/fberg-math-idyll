var Idyll = require("idyll");

const documents = [
  {
    name: "fberg-matematika1-main-page",
    idyllOptions: {
      dataFolder: "./posts/main-page/data",
      inputFile: "./posts/main-page/index.idyll",
      layout: "none",
      css: "./posts/main-page/styles.css",
      authorView: false,
      output: "./docs/main-page/",
      components: ["./posts/main-page/components/", "components"],
    },
  },
  {
    name: "vektory",
    idyllOptions: {
      dataFolder: "./posts/vektory/data",
      inputFile: "./posts/vektory/index.idyll",
      layout: "none",
      css: "./posts/vektory/styles.css",
      authorView: false,
      output: "./docs/vektory/",
      components: ["./posts/vektory/components/", "components"],
    },
  },
  {
    name: "priebeh-funkcie",
    idyllOptions: {
      dataFolder: "./posts/priebeh-funkcie/data",
      inputFile: "./posts/priebeh-funkcie/index.idyll",
      layout: "none",
      css: "./posts/priebeh-funkcie/styles.css",
      authorView: false,
      output: "./docs/priebeh-funkcie/",
      components: ["./posts/priebeh-funkcie/components/", "components"],
    },
  },
  {
    name: "funkcie",
    idyllOptions: {
      dataFolder: "./posts/funkcie/data",
      inputFile: "./posts/funkcie/index.idyll",
      layout: "none",
      css: "./posts/funkcie/styles.css",
      authorView: false,
      output: "./docs/funkcie/",
      components: ["./posts/funkcie/components/", "components"],
    },
  },
];

function compile() {
  documents.forEach(doc => {
    var idyll = Idyll(doc.idyllOptions);

    idyll
      .build()
      .on("update", () => {
        console.log(`Idyll document ${doc.name} was built successfuly.`);
      })
      .on("error", err => {
        console.error(err);
      }); // there was an error
  });
}

compile();
