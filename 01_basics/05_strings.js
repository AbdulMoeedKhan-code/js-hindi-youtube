const name = "moeed"
const repoCount = 50

//console.log(name + repoCount + "Value"); "this syntax is okay but in modern day coders don't prefer this syntax"

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); //try to use this syntax it better readable
          // Another way of declaring string
// const gameName = new String('moeedhc')

const gameName = new String('moeed-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('o')); //"it's help us to find position"

const newString = gameName.substring(0, 4) //we cannot give the negative value in "substring"
//console.log(newString);

const anotherString = gameName.slice(-8, 4) //we can only give negative value in "slice"
//console.log(anotherString);

const newStringOne = "      Moeed         "
//console.log(newStringOne);           // It will write the string as written including spaces on bothsides as written in "newStringOne"
//console.log(newStringOne.trim());   // It will trim the extra spacing 

//const url = "https://moeed.com/moeed%20khan"

//console.log(url.replace('%20', '-')) // we used "replace" in order to replace something or some new word in string 
 
//console.log(url.includes('moeed'));  // the method "include" will give us the answer in 'true' or 'false'

console.log(gameName.split('-'));




















































