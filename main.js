function changeText() {
  document.getElementById("demo").innerHTML = "You clicked the button!";
  console.log("You clicked the button!!");
}

const myName1 = "Tiffany";
console.log(myName1);

// ### first task ###
// declare your name and call the variable something
// console.log the variable

const myName2 = "Matt";
console.log(myName2);

let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log("The sum is: " + sum);

// ### second task ###
// add two numbers and sum it
// declare one number
// declare second number
// calculate the sum
// console.log the results and output to the console

let x = 100;
let y = 30;
let z = x * y;
console.log(z);

// Thanks for letting me jump into the vscode. Great job Tiffany.. Good speed and tempo. My pleasure

// ### third task ###
// declare hasCompleted variable and set true or false
// use an if-else statement to check the condition and log it
// console.log("Task complete")
// console.log("Task incomplete")

let hasCompleted = false;

if (hasCompleted) {
  console.log("Task complete");
} else {
  console.log("Task incomplete");
}

let var1 = 22;

if (var1 === 22) {
  console.log("Task Complete");
} else {
  console.log("Task Incomplete");
}

// does it create 2 different objects?

// ### Functions ###

// declare a function, a name
// one parameter inside the paratheses -----> function name()
// return the function, with parameter and some text
// favorite food

function myFavoriteFood(food) {
  return "My favorite food is " + food;
}
console.log(myFavoriteFood("Tacos"));

function myFavoriteFood1(food1) {
  return food1 + " is my favorite food";
}
console.log(myFavoriteFood1("Buffale Wings"));

let message2 = "I like to ride my bike";

function showMessage() {
  let message = "Hello, my name is Parker";
  console.log(message);
}

showMessage(console.log(message2));
