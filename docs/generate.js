// import exec method from child_process module
const { execSync } = require("child_process");

// execute mkdir command synchronously
// to make a directory with name hello


// cp src/grid.ts src/grid.js && sleep 2 && 
// node ./node_modules/jsdoc-to-markdown/bin/cli.js src/grid.js && rm src/grid.js 

// execSync("tsc src/grid.ts")
const jsdoc2md = require('jsdoc-to-markdown')
const md = jsdoc2md.renderSync({files: "docs/grid.js", configure:"docs/jsdocs.config.json"});
console.log(md);