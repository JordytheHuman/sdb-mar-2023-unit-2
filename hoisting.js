/* 
Hoisting:

let and const do not get hoisted 

var will get hoisted and if you access it before it is intialized and assigned you will get an undefined
*/

console.log(firstName);
// let firstName = "Jordan";

var firstName = "Rob";

/* 
SCOPE:

Var vs Let
- the introduction of ES6 came the introduction of let and const
- Using Let or Const you can NOT reference a variable before it is initialized.

- when it comes to scope - JS will try to look for the variable in it's current block first then it will look outwards

- a variable created in a code block can not be accessed outside of the block.

- JS has three types of scope
    1. Blcok Scope
    2. Functional Scope
    3. Global Scope

- Var keyword can not have block scope, no borders. it permeates through the block




*/

function greeting(){
console.log("Good Afternoon " + firstName)

}
greeting();


function greeting2() {
let firstName = "Jimbo";
    console.log("Good Afternoon " + firstName);
// ? what first name will it use?
} 
  greeting2();

// ? Do I get ROB or JIMBO
console.log(firstName);
// due to scope I dont have access to the first name that is inside of the function, I have access to the first name that is outside of the function
// hoisting and scope are the vocab words 


function greeting3() {
    firstName = "Betty";
        console.log("Good Afternoon " + firstName);
    // ? can I reassign a variable inside of a function and does it assign outside of the function outside as wel?
    } 
      greeting3();

    console.log(firstName) //prints Betty
    // a function can redeclare a variable outside of its block and it stays true outside of the block when calling upon it.

    function greeting4(firstName) {
    console.log("Good Afternoon " + firstName);
    }

    greeting4("Barney");

var x = 12

function varTest(){
    var x = 33;
    if (1==1){
        var x = 45;
    console.log(x); // 45?
    }
    console.log(x); // 33? or 45?
}

console.log(x); // 12?
varTest();