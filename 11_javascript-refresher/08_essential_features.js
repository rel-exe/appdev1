const hobbies = ["Reading", "Writing", "Playing"];

hobbies.forEach(hobby => console.log(hobby));

let { name, age } = {
    name: "Russel",
    age: "20"
};

console.log(name);
console.log(age);

const oldArray = [1, 2, 3];

const newArray = [...oldArray, 4, 5];
console.log(newArray);