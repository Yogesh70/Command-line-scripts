let input = process.argv.slice(2);
let viewFile = require("./commands/view");
let untreefy = require("./commands/untreefy");
let help = require("./commands/help");
let treefy = require("./commands/treefy");
// console.log(input);

// node tpp.js view src -t
// node tpp.js view src -f
let cmd = input[0];
switch(cmd) {
    case "view":
        viewFile.view(process.argv[3], process.argv[4]);
        break;

    case "untreefy":
        untreefy.untreefy(process.argv[3], process.argv[4]);
        break;

    case "treefy":
        treefy.treefy(process.argv[3], process.argv[4]);
        break;

    case "help": 
        help.help();
        break;

    default:
        console.log("Work Command");
        break;

     
  }