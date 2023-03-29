/* 
CONDITIONALS:
- We use conditionals when a decision needs to be made.
- The conditions need to either be truthy or falsey 
- Tools we have available for decision making are the following
    - if statements
    - if else statements
    - if - else if - else statements
    - Turnary statements
*/

// ? Create an if statement for the condition using a 24hr clock if it's before 12pm console.log ("good morning")

let currentHour = 12;

console.log(currentHour < 12);

// (1) - keyword - if() to start the statement
// (2) - conditional - must result in a truth
// (3) - inbetween{} - is considered a block of code
// (3a) - this block of code will be executed if the conditional is true.
if (currentHour < 12) {
  console.log("good morning");
}

//example of if - else statement

if (currentHour < 12) {
  console.log("good morning");
} else {
  currentHour > 12;
  console.log("good afternoon");
}

// !example of if - else if - else statement

if (currentHour < 12) {
  console.log("Good Morning");
} else if (currentHour < 17) {
  console.log("Good Afternoon (if-else-if)");
} else {
  console.log("Good Evening");
}

// adding noon
if (currentHour < 12) {
  console.log("Good Morning");
} else if ((currentHour = 12)) {
  console.log("Good Noon");
} else if (currentHour < 17) {
  console.log("Good Afternoon (if-else-if)");
} else {
  console.log("Good Evening");
}

// ? Write a conditional based on age will store in a variable the price of the movie ticket;
// Child Price = 5 (age 10) 10 or younger
// Adult Price = 10
// Senior Price = 8  age(age 55) 55 or older

// let age = ;
// let priceOfTicket = ;

// If statements...

// ! fix this
/* let currentAge = 10;
let priceOfTicket1 = 0;

if (currentAge <= 10) {
    let priceOfTicket1 = 5
} else if (currentAge >= 55) {
    let priceOfTicket1 = 8
} else {
    let priceOfTicket1 = 10
}

console.log("the ticket price is $" + priceOfTicket) */

// ? Write a conditional based on age will store in a variable the price of the movie ticket;
// Child Price = 5 (age 10) 10 or younger
// Adult Price = 10
// Senior Price = 8  age(age 55) 55 and older
// Addon Challenge:
// Add a military discount to seniors and adult tickets discount of 1 dollar off
let age = 18;
let priceOfTicket = 0;
let isMilitaryMember = true;

// If statements...
if (age <= 10) {
  priceOfTicket = 5;
} else if (age >= 55) {
  priceOfTicket = 8;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
} else {
  priceOfTicket = 10;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
}
console.log("Price of the ticket is: $" + priceOfTicket);

// ! Turnaries

/* 
1. Conditional that will result in a true or false
2. Add a (?) and what is on the right side of the questionmark up to the colin is what will happen if it is true
3. Code for the truth
4: Truth and False divider
5: Code for the false

       (1)                 (2)         (3)                       (4) (5)
 isMilitaryMember === true ? (priceOfTicket = priceOfTicket - 1) :(priceOfTicket = priceOfTicket);
*/

// ? Write an if else statement to determine if the current seconds are odd or even.
// ? If it's even console log "The current second is 22 and it is even"
// ? If it's odd console log "The current second is 23 and it is odd"

// ! BONUS: See if you can create a turnary to solve this...

const d = new Date();
let seconds = d.getSeconds();
seconds % 2 == 0
  ? console.log(`The current second is ${seconds} and it is even`)
  : console.log(`The current second is ${seconds} and it is odd`);

// turnaries are typically only used for if else statements

if (seconds % 2 == 0) {
  console.log(`The current second is ${seconds} and it is even`);
} else {
  console.log(`The current second is ${seconds} and it is odd`);
}
// 2 option things, coin flip.

// ! Switches

let randomNumber = 2;
let color = "";
switch (randomNumber) {
  case 1:
    color = "red";
    break;
  case 2:
    color = "blue";
    break;
  case 3:
    color = "pink";
    break;
  case 4:
    color = "purple";
    break;
  case 5:
    color = "white";
    break;
case 6:
    color = "green";
    break
    default:
      color = "unknown"
}

console.log(color);