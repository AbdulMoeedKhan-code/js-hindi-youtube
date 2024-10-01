// Array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["superman", "batman", "spiderman"]

const myArr2 = new Array (1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //it remove the last value form the array

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); // -1 "it mean that this object does not exist in this array"
// console.log(myArr.indexOf(3)); // 3  "as it exist so it will give use the object"

const newArr = myArr.join()

// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// console.log(newArr); //  0, 1, 2, 3, 4, 5  'in this the main thing is that the type has been changed'
                                     // but the answer some is due to the array bcz the array is the same
// console.log(typeof newArr);// string "this array is converted into bcz of the 'join'"

// Slice, Splice

console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 

console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);  // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);   // [ 1, 2 ]
console.log(myn2);



























