// import exec method from child_process module
const { execSync } = require("child_process");
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');

// tsc throws error on linting issues, don't break the script
try{
    execSync("tsc src/grid.ts src/globals.ts --outDir docs");
} catch (err) {
 
}

// Jsdocs to Markdown
const md = jsdoc2md.renderSync({files: ["docs/grid.js", "docs/globals.js"], configure:"docs/jsdocs.json"});

// Output
fs.writeFileSync('docs/api.md', md);

// Cleanup
execSync("rm docs/grid.js docs/conditions.js docs/globals.js");
