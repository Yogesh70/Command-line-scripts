console.log("Hello All:)");
// primitive type=> Number,string,boolean,undefined,null
// let varName;
// varName = 10;
// varName = "I am a string";
// varName = true;
// varName = null;
// console.log(varName);
 let num = 223;
for(let i = 2 ; i*i<= num ; i++) {
    if(num % i == 0) {
        console.log("Number is not Prime");
        return;
    }
}
console.log("Number is Prime");