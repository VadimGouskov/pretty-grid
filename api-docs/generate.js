// import exec method from child_process module
const { execSync } = require("child_process");
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');

// tsc throws error on linting issues, don't break the script
try {
    execSync("tsc src/grid.ts src/globals.ts --outDir api-docs");
} catch (err) {

}

// Jsdocs to Markdown
const md = jsdoc2md.renderSync({ files: ["api-docs/grid.js", "api-docs/globals.js"], configure: "api-docs/jsdocs.json" });

// Output
fs.writeFileSync('docs/api.md', md);

// Cleanup
execSync("rm api-docs/grid.js api-docs/conditions.js api-docs/globals.js");
