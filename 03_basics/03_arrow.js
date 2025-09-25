const user = {
    username: "John",
    price: 999,

welcomeMessage: function() {
    console.log( `${this.username} ,welcome to website`)
    console.log(this);

   }

}

//  user.welcomeMessage()
//  user.username = "ssam"
//  user.welcomeMessage()


//  console.log(this)

// function chai() {
//     let pusername  = "ssam"
//     // console.log(this.username);  ****(functon ka andar ya nahi ho ga)***

// }

// chai()


const chai =  () => {
    let usename = "ssam"
    console.log(this); 
}


// chai()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

const addTwo = (num1 , num2) =>  ({username: "shaswat"})



console.log(addTwo(5,6));

const myArray = (2,3,4,5,6)

myArray.forEach()