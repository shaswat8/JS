// singlrton 

// object literals  

const mySym = Symbol("mykey1")

    const JSUser = {
        name: "John",
        "full name": "John Doe",
        [mySym]: "mykey1",
        age: 30,
        location: "USA",
        email:"john@gmail.com",
        isLoggedIn: false,
        lastLoggedInDays: ["Monday", "Friday"]
    }

    // console.log(JSUser.email)
    // console.log(JSUser["email"])
    // console.log(JSUser["full name"])
    // console.log(JSUser[mySym])

    JSUser.email = "john@chatgpt.com"
    // Object.freeze(JSUser);
    JSUser.email = "john@microsoft.com"
    // console.log(JSUser);

    JSUser .greeting = function(){
        console.log("Hello JSUser");
    }

    JSUser .greetingTwo = function(){
        console.log(`Hello JSUser,${this.name}`);
    }

    console.log(JSUser.greeting());
     console.log(JSUser.greetingTwo());