const AST = require('idyll-ast');

module.exports = (ast) => {
  return AST.appendNode(ast, AST.createNode('div', {}, 'Hello World!') );
};
