let a = [1,2,3,4,5];
let b = a;
console.log(b);

let fnkaRef = function greeter() {
    console.log("Coz fns are variable");
    return 20;
}

console.log(fnkaRef);
console.log(fnkaRef());

function greeter(param) {
    console.log("Inside Greeter");
    console.log(param);
    param()
}

greeter(function innerfn() {
    console.log("I am passed as a parameter");
    let a = 10;
    console.log(++a);
} )