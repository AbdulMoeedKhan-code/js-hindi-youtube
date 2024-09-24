//  Primitive

//  7 types: String, Number, Boolean, null, undefined, symbols, BigInt
// ----integer datatype----
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123') 

//console.log(id === anotherId);

//const bigNumber = 873204320432n



//                       AND

// Refenece (Non primitive)

// Array, Object, Functions

const heros = ["batman", "superman","spiderman"]   //these are values'these are reference type or non primitive'
 let myObj = {                                     //object are written in curly braces'mean in keyvalue'
    name: "moeed",
    age: 20,
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3