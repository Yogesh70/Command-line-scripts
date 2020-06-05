 module.exports.myfn = function myfn () {
     console.log("I am a fn exported from libModule");

 }

 module.exports.another = function anotherfn () {
     console.log("I am another fn exported form libModule");

 }

 function private () {
     console.log("I am a private fn don't export me");
 } 
//  bjfdkjbdkjsbksjk 
 console.log("I am libModule and i was compiled first then my data was exported");
//  If there is any error in libModule, the error arises in the compiler before being handed to the User 

