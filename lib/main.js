const argv = require("yargs").argv;
const opn = require("opn");
const chalk = require("chalk");

const help = require("./help");

module.exports = {
  init: function() {
    if (argv["_"] != "") {
      this.search();
    } else {
      help.default();
    }

    if (argv["h"]) {
      help.default();
    }
  },
  search: function() {
    // get the args without prefix
    var _args = argv["_"];

    // urlencode those arguments for the browser
    var encodedString = encodeURI(_args);

    // setup search engines
    var duckDuckGo = "http://duckduckgo.com/?q=";
    var searchEngine = duckDuckGo;

    // log the results to the console
    console.log("Searching for " + chalk.yellow(_args));
    opn(searchEngine + encodedString, { wait: true }, () => {
      console.log(chalk.green("Done!"));
    });

    this.multipleSearches(_args);

    process.exit(1);
  },
  multipleSearches: input => {
    if (input > 1) {
      input.map(
        (item,
        () => {
          console.log(item);
        })
      );
    }
  }
};
