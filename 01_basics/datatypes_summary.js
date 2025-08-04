// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 34353434534n

// Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "superman", "batman"];
let myObj= {
    name: "shaswat",
    age: 20,
}

const myfunction = function(){
     console.log("Hello world");
}

//console.log(typeof outsideTemp);



// **************************************************

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "shaswat"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "usery@bl"

}
let userTwo = userOne 

userTwo.email = "shaswat@google.com"

console.log(userOne.email);
console.log(userTwo.email);