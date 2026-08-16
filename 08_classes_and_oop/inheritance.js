class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // super is used to call the constructor of the parent class
        this.email = email
        this.password = password
    }

    addCourses() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@Teacher.com", "123")

chai.logMe()

const masalaChai = new User ("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher);
