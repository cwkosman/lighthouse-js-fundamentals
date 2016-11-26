var raining = true;
var temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/*Additional examples of logioal operators*/

var isCitizen = true;
var age = 25;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outisde isn't such a great idea...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}