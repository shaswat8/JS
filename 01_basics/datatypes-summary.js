// Peimitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345678875n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myobj = {
name: "shaswat"

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId)





// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive),Heap (Non-Primitive)
 
let myYoutubename = "shaswatyadav"

let anothername =  myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    eamil: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shaswat@google.com"

//console.log(userOne.email);
//console.log(userTwo.email);
