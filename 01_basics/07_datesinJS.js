//Date

let myDate = new Date()
// console.log(myDate.toString()); // Tue Oct 01 2024 05:10:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Oct 01 2024
// console.log(myDate.toISOString());  // 2024-10-01T05:10:27.422Z
// console.log(myDate.toJSON());    // 2024-10-01T05:10:27.422Z
// console.log(myDate.toLocaleDateString());   // 10/1/2024
// console.log(myDate.toLocaleString()); //  10/1/2024, 5:10:27 AM
// console.log(myDate.toLocaleTimeString());//  5:10:27 AM

// console.log(typeof myDate);  //Object

// let myCreatedDate = new Date(2023, 0, 23) 
// console.log(myCreatedDate.toDateString()); //  Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());  //  1/23/2023, 12:00:00 AM

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString()); //  1/14/2024

// let myCreatedDate = new Date ("11-01-2004")
// console.log(myCreatedDate.toLocaleString()); //  11/1/2004, 12:00:00 AM

// *********Time Stamp in JS**********

let myCreatedDate = new Date ("11-01-2004") 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //1727761167206
// console.log(myCreatedDate.getTime()); //1099267200000
// console.log(Date.now());  //1727761280057

// console.log(Math.floor(Date.now()/1000)); //1727761380


let newDate = new Date ()
console.log(newDate.getMonth() + 1); //10 =>"give me current month"
// the purpose of doing plus one is bcz the mounth in JS start from 0=> JAN
 console.log(newDate.getDate()); //1 => 'give me current day' 

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
   
})














