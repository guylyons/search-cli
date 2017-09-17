#!/usr/bin/env node
const opn = require("opn");
const argv = require("yargs").argv;
const chalk = require("chalk");

var nonPrefixedArguments = argv["_"];
var encodedString = encodeURI(nonPrefixedArguments);

// is the search multiples?
// if(nonPrefixedArguments.length > 1) {
//     nonPrefixedArguments.map( (arg) => {
//         opn("http://duckduckgo.com/?q=" + encodedString[arg], { wait: true });
//     });
// } else {
// }

console.log("Searching for " + chalk.yellow(nonPrefixedArguments));
opn("http://duckduckgo.com/?q=" + encodedString, { wait: true }, () => {
    console.log(chalk.green("Done!"));
});

process.exit(1);
