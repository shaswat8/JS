
function sayMyName(){
console.log("S")
console.log("H")
console.log("A")
console.log("S")
console.log("W")
console.log("A")
console.log("T")

}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1, number2)
// }

function addTwoNumbers(number1,number2){
   
    // let result = number1 + number2
    //   *****(result ka bad kuch bi nahi print hota hai)****
    // return result
    return number1 + number2
}

const result = addTwoNumbers(10,20)

// console.log("Result:",result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1 
}

// console.log(calculateCartPrice(200 , 499, 600))

const User = {
    username: "hitesh",
    prices: 999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(User)
handleObject({
    username: "shaswat",
    price: 199
})

const myNewArray  = [1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([1,2,3,4,5]));

