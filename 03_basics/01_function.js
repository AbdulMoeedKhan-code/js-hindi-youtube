// Function mean the code that we have written of 10 lines or 20 lines are closed in a package.
// we use it copies as many time as we want.



// This is the syntax of the function

function sayMyName() {
console.log("M");
console.log("O");
console.log("E");
console.log("E");
console.log("D");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
    
// }
// addTwoNumber() // we will get "NaN" in the answer so in the parathese"" we have to add some number as shown

// addTwoNumber(3, 5) // answer is 8
// addTwoNumber(3, "5")// answer is 35 bcz it will act like a string.

// const result = addTwoNumber(3, 5) // 8

// console.log("Result:", result);  // Result: undefined

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    // both the above and the low written method is correct
       return number1 + number2
 }

 const result = addTwoNumber(3, 5) // 8

//  console.log("Result:", result); // result: 8

function loginUserMessage(username = "sam") {
    if (!username) {
         console.log("Please enter a username");
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("moeed"));
// console.log(loginUserMessage("")); // "just logged in"=> if we leave it like empty string answer 
console.log(loginUserMessage());  // "undefined just logged in" =>if does passy any value 
 










