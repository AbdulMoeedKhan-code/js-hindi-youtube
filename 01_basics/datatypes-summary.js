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

//console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++ Momory +++++++++++++++++++++++++
//    There are two types of menory:
//    1)Stack(it is used in 'Primitive')    2)Heap(it is used in 'Non-Primitive) 
//  "we will get the copy of the variable"  "we will get the reference of the original value"

let myYoutubename = "Abdulmoeedkhan"

let anothername = myYoutubename
anothername = "code with moeed"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
   email: "usergoogle.com",
   banking: "user@banking",
}

let userTwo = userOne

userTwo.email = "moeed@google.com"

console.log(userOne.email);
console.log(userTwo.email);



