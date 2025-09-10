console.log(26 == "26");
console.log(26 === "26");

let undefinedVar;
let nullVar = null;

console.log(undefinedVar);
console.log(nullVar);

const obj = {
  value: 25,
  regFunc() {
    console.log("regFunc:", this.value);
  },

  arrFunc: () => {
    console.log("arrFunc:", this.value);
  }
};

obj.regFunc();
obj.arrFunc();

const array1 = [2, 4, 6];
const array2 = array1;
array2.push(8);

console.log("array1:", array1);
console.log("array2 (reference copy):", array2);

const array3 = [1, 3, 5];
const array4 = [...array3];
array4.push(7);

console.log("array3:", array3);
console.log("array4 (spread copy):", array4);
