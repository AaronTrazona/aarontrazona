#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
	padding: 1,
	margin: 1,
  borderStyle: "round",
  borderColor: "green"
};
const fs = require("fs");
const path = require("path");

let output = `
      ${chalk.yellow.bold('┌─┐┌─┐┬─┐┌─┐┌┐┌  ╔╦╗┬─┐┌─┐╔═╗┌─┐┌┐┌┌─┐')}
      ${chalk.yellow.bold('├─┤├─┤├┬┘│ ││││   ║ ├┬┘├─┤ ╱ │ ││││├─┤')}
      ${chalk.yellow.bold('┴ ┴┴ ┴┴└─└─┘┘└┘   ╩ ┴└─┴ ┴╚═╝└─┘┘└┘┴ ┴')}

∙ Senior Software Developer at {dna:micro}
∙ Knowlegable in Front-end and Back-end Development
∙ Specialize in Nodejs and Reactjs

     https://${chalk.blue("facebook")}.com/${chalk.yellow("19aaron89")}
       https://${chalk.blue("github")}.com/${chalk.yellow("aarontrazona")} 
  https://${chalk.blue("linkedin")}.com/in/${chalk.yellow("aaron-trazona")}
                          ${chalk.yellow("dev.trazona")}@${chalk.blue("gmail")}.com

                    $ npx ${chalk.yellow("aarontrazona")}`;

const [, ...trimmed] = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card); 
console.log(card);
