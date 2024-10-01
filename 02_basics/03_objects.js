// Object
// There are two way of assigning the subject "Literals" & "Constructure"
// when to declare the object in litter then singleton is not made
// if it is make through constructure then singleton is made

// object Literals 
// 1st way of making the object
// Object.create   // => we will not talk about this method in this lesson now 

// 2nd way of making the object
// => {} the text written in this is know as object


const mySym = Symbol("key1")

const JsUser = {                                       
    name: "Moeed",                        //=> we can define keys "name" and value "Moeed" in the object
    "full name": "Abdul Moeed Khan",
    [mySym]: "maykey1",
    age: 18,
    location: "Rawappindi",
    email: "moeed@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); 
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);

JsUser.email = "moeed@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "moeed@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


















