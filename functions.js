/* 
Functions:

- Functions provide a block of code that will only be ran once it is 'called' upon.
- It starts with a keyword `function` followed by the name you give your function.
- Functions do NOT need to have arguments/parameters
- Functions do NOT need to return a value, however the often do 
- Functions get hoisted  meaning you can call on them prior to the function defination/declaration
*/


/* 
keyword "function" 
function Name
inside the ()'s you have arguments
*/

function example1() {
    // any code inside her will executed when the function is `called`
    console.log("Example1 Function was Executed");
}

// You must call the function for it to be executed
example1();

/* 
Function with Parameters or Arguments
1. key word `function`
2. Function Name
3. inside the ()'s we can have unlimited parameters, all have to be seperated by a comma

*/

function example2(param1, param2){
    console.log("Example 2 function was executed");
    console.log("Param1:", param1);
    console.log("Param2:", param2);
}


example2(10,5);
example2("Jordan", "Kaufman");
example2(); // still runs but comes back undefined

function sumTwoNumbers(numberOne, numberTwo) {
    let total = numberOne + numberTwo;
    return total;    
}

let sum1 = sumTwoNumbers(10,5);
let sum2 = sumTwoNumbers(20,45);

console.log(sum1, sum2);

function calculateTax(cost, taxPercentage){
let totalTax = cost * taxPercentage;
return +totalTax.toFixed(2);
}
// `+` converts a string to a number

let shoppingCartTotal= 21.99
let checkoutTax = calculateTax(shoppingCartTotal, .08);

let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkoutTax); 

console.log(checkoutTax);
console.log(checkoutTotal);

// ? write a function that will take 3 arguments (length, width, height)
// ? function should return the volume of the cuboid;

function volumeOfCuboid(length, width, height){
    let totalVolume = (length * width * height);
    return totalVolume;
}
let cuboid1 = volumeOfCuboid(5,6,2);
console.log(cuboid1);

//// ? Write a function that will accept a dog's age and returns a human age.
// ? Humage Age  = (Dog age -2) x 4 +21

function dogsToHumans(doggoAge) {
    let humanAge = (doggoAge - 2) * 4 + 21
    return humanAge
}
let humanAge1 = dogsToHumans(5);
console.log(humanAge1);

function calcDogYearsToHumanYears(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    return humanAge;
  }
  
  let johnDogAge = calcDogYearsToHumanYears(3);
  let ashleeDogAge = calcDogYearsToHumanYears(1.8);
  let isaacDogAge = calcDogYearsToHumanYears(11);
  let nickDogAge = calcDogYearsToHumanYears(14);
  let trevorDogAge = calcDogYearsToHumanYears(2.5);
  
  // how to group variables together, wasn't taught just used by Rob
  
  [johnDogAge, ashleeDogAge, isaacDogAge, nickDogAge, trevorDogAge].map((x) =>
    console.log(x)
  );
  