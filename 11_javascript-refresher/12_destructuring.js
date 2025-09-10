const person = {
  name: "Russel", 
  age: 20 
}

const { name, age } = person;  
console.log(name); 
console.log(age);

const hobbies = ["reading", "writing","playing"]
const [hobby1, hobby2, hobby3] = hobbies
console.log(hobby1) 
console.log(hobby2)
console.log(hobby3)

function printName({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`)
}

printName(person)