let foods = ["Ice Cream", "Mushroom", "Pizza"];
foods.push("Doughnut");
foods.shift();

for (let food of foods) {
  console.log(food);
}

let newFoods = foods.map(food => `I like ${food}`);
console.log(newFoods);