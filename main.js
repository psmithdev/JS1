function changeText() {
  document.getElementById("demo").innerHTML = "You clicked the button!";
  console.log("You clicked the button!!");
}

// declare a variable
// favorite food
// favorite color
// console.log

let Favfood = "pizza";
let Favcolor = "blue";
console.log(Favfood);
console.log(Favcolor);
//yes i remember boolean

let new_Fav_Food = "Buffalo wings";

if (new_Fav_Food == "Buffalo wings") {
  console.log(true);
} else {
  console.log(false);
}

// equality check == or ===
// single = assigment

let favoriteFood = "burgers";
let favoriteColor = "Blue";
console.log(favoriteFood);
console.log(favoriteColor);

// for loop

// for (initalize; condition increment/decrement ++ or --)

// ### for loop task ###
// google how to write a for loop
// loop your favorite food or favorite color 5 times
// either increment ++ or decrement --
// greater than > or less than <

const n = 5;

for (let i = 1; i <= n; i++) {
  console.log("i, Favfood");
}
Ditto;
for (let x = 1; x <= 5; x++) {
  console.log(x, new_Fav_Food);
}

// ### DOM ###
// manipulate the DOM
// select it with a QuerySelector
// create the element
// append the element
// alter the element

function redText() {
  const redButton = document.querySelector("#demo");
  const redParagraph = document.createElement("div");
  redParagraph.textContent = "this is a red paragraph";
  redButton.appendChild(redParagraph);
}

g = document.createElement("div");
g.setAttribute("id", "Div1");
document
  .getElementById("Div")
  // something like this
  .document.getElementById("demo").style.color = "orange";

// create a button with onclick and a function
