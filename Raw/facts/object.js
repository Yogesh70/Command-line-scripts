//key :value pair
//user, resource
 let obj = {
     name: "Steve",
     lastname: "Rogers",
     address: {
         state: "New York",
         city: "Manhatten"
     },
     movies: ["Civil War","Avengers","Winter Soldier"],
     age: 35,
     isAvenger: true,

     sayHi: function () {
         console.log("Cap say's Hi");
     }

 }

//  console.log(obj);
//  let val = obj.address;
//GET
 console.log(obj.age);
 console.log(obj.movies[1]);
 console.log(obj.isAvenger);
 console.log(obj.sayHi());
 obj.sayHi();

//SET, UPDATE
obj.isAvenger = false;
console.log(obj.isAvenger);
obj.friends = ["Bruce","Robert","Peter"];
console.log(obj);

//Delete
delete obj.age;
console.log(obj);

obj.newfn = function newfn() {
    console.log("I am a newfn");
}

console.log(obj);