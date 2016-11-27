var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("\nWhile loop")
var index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}

console.log("\nFor loop")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\nFor loop in reverse")
for (var i = (ingredients.length - 1); i >=0; i--) {
  console.log(ingredients[i]);
}
