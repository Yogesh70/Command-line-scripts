let fs = require("fs");

//src -t
//src -f
module.exports.view = function () {

    let src= arguments[0];
    let mode= arguments[1];
    if(mode== "-t") {
        viewAsTree(src, "");
    } else if(mode== "-f") {
        viewAsFlatFiles(src, path.basename(src));
    } else {
        console.log("Enter correct mode");
    }
}

let path = require("path");
function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile();
}

function getContent(src) {
    return fs.readdirSync(src);
}

function viewAsFlatFiles(src, toprint) {
   if (checkWhetherFile(src) == true) {
       console.log(toprint + " *");
   } else {
       //directory
       //print
       console.log(toprint);

       //get children
       let childNames = getContent(src);
    //    console.log(childNames);
       for(let i=0;i < childNames.length;i++) {
           let childPath = path.join(src, childNames[i]);
           let cToprint = path.join(toprint, childNames[i]);
           viewAsFlatFiles(childPath, cToprint);
       }
   }
}

function viewAsTree(src, indent) {
    if (checkWhetherFile(src) == true) {
        console.log(indent + path.basename(src) + " *");
    } else {
        //directory
        //print
        console.log(indent + path.basename(src));
 
        //get children
        let childNames = getContent(src);
        //console.log(childNames);
        for(let i=0;i < childNames.length;i++) {
            let childPath = path.join(src, childNames[i]);
            viewAsTree(childPath, indent + " ");
        }
    }
 }
 
