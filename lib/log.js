// helper for logging to the console

const chalk = require("chalk");

module.exports = {
  error: message => {
    console.log(chalk.red(message));
  },
  success: message => {
    console.log(chalk.green(message));
  }
};
