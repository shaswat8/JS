const userEmail = "shaswat.ai"

 if (userEmail) {
     console.log("Got user email");
 } else {
     console.log("Email not found");
 }

// false value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, {}, [], 1, -1, "false", "0", "null", "undefined", "NaN"

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//  Nullish coalescing operator (??): null or undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = undefined ?? 15;
//val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator

// consition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");