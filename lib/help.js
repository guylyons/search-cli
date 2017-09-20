const chalk = require("chalk");
const pjson = require("../package.json");

module.exports = {
  default: () => {
    console.log(chalk.blue("Search CLI " + pjson.version));
    console.log("Help");
  }
};
