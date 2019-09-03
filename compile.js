var Idyll = require('idyll');

const documents = [
  {
    name: "priebeh-funkcie",
    idyllOptions: {
      theme: "default",
      layout: "centered",
      css: "./posts/priebeh-funkcie/styles.css",
      authorView: false,
      dataFolder: './posts/priebeh-funkcie/data',
      inputFile: './posts/priebeh-funkcie/index.idyll',
      output: "build/priebeh-funkcie",
      components: [
        "./posts/priebeh-funkcie/components/",
        "components"
      ]
    }
  },
]

function compile() {
  documents.forEach(doc => {
    var idyll = Idyll(doc.idyllOptions);

    idyll.build()
      .on('update', () => {
        console.log(`Idyll document ${doc.name} was built successfuly.`)
      })
      .on('error', (err) => {
        console.error(err)
      }) // there was an error
  })
}

compile()
