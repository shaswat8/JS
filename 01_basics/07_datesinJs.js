// Dates 

let myDate = new Date(); 
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 30)
// console.log(myCreatedDate.toDateString());
let myCreateDates = new Date("01-15_2024");
// console.log(myCreateDates.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "Asia/kolkata"
})