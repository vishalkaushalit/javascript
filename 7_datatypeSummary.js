//  Primitive 

// 7 types : String, Number, Boolean, Symbol, null, undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null

let useEmail; // undefined or written as let useEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId); // false
// console.log(id === anotherId); // false 

const bigNumber = 353446456464543n;

// console.log(typeof bigNumber) // bigint


// Reference (Non-Primitive)

// 3 types: Arrays, Objects, Functions

const fruits = ["apple", "mango", "banana", "orange"];

const student = {
    name: "Demo",
    age: 25,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof fruits) // object
console.log(typeof null) // object
console.log(typeof student) // object
console.log(typeof myFunction) // function but it is calles as Object function