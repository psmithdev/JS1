let fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Papaya",
  "Pineapple",
  "lemon",
];

let cars = ["Toyota", "Honda", "Ford", "Chevrolet", "Dodge", "Jeep", "Nissan"];

const fruityCars = fruits.concat(cars);

console.log(fruityCars);

console.log(fruityCars.length);

// ###### create new array ######
let animals = ["Dog", "Cat", "Rabbit", "Horse", "Elephant", "Lion", "Tiger"];
console.log(animals.push("Cow"));
console.log(animals);

let beasts = ["Wolf", "Bear", "Fox", "Coyote", "Lynx", "Bobcat", "Panther"];
console.log(beasts.indexOf("Panther"));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const map1 = numbers.map((x) => x * 2);
console.log(map1);

// ## Sum an array of numbers ##
// for loop and .reduce() method

// for loop
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const exampleArray = [10, 20, 30];
console.log(sumArray(exampleArray));

// .reduce() method
function sumArrayReduce(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

const exampleArray2 = [6, 7, 8, 9, 10];
console.log(sumArrayReduce(exampleArray2));

const array3 = [6, 7, 8, 9, 10];
const reversedArray = array3.reverse();
console.log(reversedArray);

// ## Reverse a string ##
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

console.log(reverseString("Hello").toEqual("olleH"));

// push method, adds element to the end of the array and returns the new length of the array
// pop method, extracts the last element of the array and returns it
// shift method, extracts the first element of the array and returns it
// unshift method, adds element to the beginning of the array and returns the new length of the array
// splice method, adds or removes elements from the array, define how many elements to remove
// slice method, extracts a section of the array and returns a new array
// join method, joins all elements of the array into a string
// concat method, joins two or more arrays and returns a new array
// indexOf method, returns the first index at which a given element can be found in the array
// map method, creates a new array with the results of calling a provided function on every element in the array
// reduce method, applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// reverse method, reverses the array in place
