let arr= [3,6,14,16,22];
function transformer(elem) {
    if(elem%2==0) {
        return elem+1;
    } else {
        return elem-1;
    }
}

function test(elem) {
    for(let i=2; i*i <= elem;i++) {
        if(elem % i== 0) {
            return false;
        }
            return true;
        }
   }

   function myMap(arr,cb) {
        

   }
let newArr= arr.map(transformer);
// console.log(newArr);
// console.log("---------------------")
// console.log(arr);
let fArr = newArr.filter(test);
console.log(fArr);
console.log("```````````````````");
console.log(arr);
