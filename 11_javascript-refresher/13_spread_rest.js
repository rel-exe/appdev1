const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); 

const user = { name: "Russel", age: 20 }
const info = { ...user, hobby: "reading" };
console.log(info); 

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

console.log(sum(5, 5));       