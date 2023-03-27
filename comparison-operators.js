//
// Comparison Operators
/* 
double equal (==)
triple equal (===) - checking for equal value and equal type 

one equals is assignment

Not Equal
(!=)
(!==) - not equal value, not equal type


For Numbers (Greater than , less than)
(>) - greater than
(<) - less than
(>=) - greater than or equal to 
(<=) - less than or equal to

Logical operators
&& - and
|| - or
*/

let helicopter1 = "blackHawk";
let helicopter2 = "Blackhawk";

console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); //returns a boolean


let myAge = 42;
let friendAge = "42";

console.log("my age double", myAge == friendAge);
console.log("my age triple", myAge === friendAge);

let name1 = "Robin";
let name2 = "Batman";

console.log(name1 != name2);

console.log("not age", myAge !== friendAge);

let num1 = 10
let num2 = 5

console.log(num1 > num2)

let joiningMilitaryAge = 18;
let maxJoiningMilitaryAge = 34;

let bethAge = 17;
let hankAge = 38;

console.log(bethAge >= joiningMilitaryAge)

console.log("hank", hankAge >= joiningMilitaryAge && hankAge <= maxJoiningMilitaryAge);

let person1Permissions = "admin"
let person2Permissions = "user"
let person3Permissions = "guest"

let isViewableAdmin = person1Permissions === "admin" || person2Permissions === "user";

console.log("isViewableAdmin", isViewableAdmin);

// ? MIni challenge:
// create a variable called isEven1 and isEven2
// boolean
// the variable is true if the value is even
// false if the value is odd
// test it out with 33 and 122

// how can i tell if a number is even?
console.log("odd", 33 % 2); // results in a remainder of 1 so it is odd
console.log("even", 122 % 2); // results in a remainder of 0 so it is even

let isEven1 = (33 % 2) === 0;
let isEven2 = (122 % 2) === 0;

console.log(isEven1);
console.log(isEven2);



