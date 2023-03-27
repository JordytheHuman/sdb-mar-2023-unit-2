/* 
Types - Data Types
- Strings
- Numbers
- Booleans
*/

/* 
STRINGS:
- datatypes used to represent text and they are wrapped in single quotes , double quotes or backticks 
*/

let stringOne = "double quotes";
//prettier-ignore
let stringTwo = 'single quotes';

let stringThree = `backtick quotes`;
// if injecting variables, use backticks

// Combining Strings (cancatonate)

let greeting = 'Good Morning';

let firstName = "Jordan";

console.log(greeting + firstName);

// solution;

console.log(greeting + " " + firstName);
// let greeting = 'Good Morning '

let fullGreeting = `${greeting} ${firstName}`;
// Backticks around variables used when referencing variables. need ${} around the variable.

// ! If you want to know what "TYPE" the variable is you can use the keyword typeof

console.log(fullGreeting);



// ! NUMBERS
let currentTemp = 38;

console.log(typeof currentTemp);

let funkyNumber = 0.2 + 0.1;
console.log(funkyNumber);

let add1 = 2+1;

console.log(add1);

Math.floor
Math.ceil
Math.round

let totalMoney = (1999 + 1599) / 100;

console.log(totalMoney);

// ! Be Careful of mismatching Strings and Numbers

let myAge = "42";
let friendAge = 34;

console.log(myAge + friendAge);

//how to convert a string to a number. 

console.log(Number(myAge) + friendAge);
// parseInt(myAge)
// add a (+) before the string variable
console.log(+myAge + friendAge);

console.log(myAge / friendAge);

let stringNumber = "23"
console.log(stringNumber / 2);


let stringExample = "abcd";

console.log(stringExample / 2);

// ! Number Operators
/* 
Adding Numbers use a (+)
Subracting numbers use a (-)
Multiplying numbers use a (*)
Dividing numbers use a (/)

Special ones
exponents use (**)
Modulus (aka The remainder)
*/
// 3^3
console.log (3 ** 3);
// 21/10  = 2 R 1
console.log(21 % 10) // result: 1;

// how can i tell if a number is even?
console.log("odd", 33 % 2); // results in a remainder of 1 so it is odd
console.log("even", 32 % 2); // results in a remainder of 0 so it is even

// ? How do I take what I had before and add to it
let totalPrice = 0;
let item1 = 5;
totalPrice = totalPrice + item1;
console.log(totalPrice);
let item2 = 10;
totalPrice = totalPrice + item2;
// totalPrice += item2 (same as line before)
console.log(totalPrice);


// ! Booleans
// booleans only have two possible values (true or false)

let isOver21 = true;
let isCloudy = false;

console.log(typeof isCloudy);