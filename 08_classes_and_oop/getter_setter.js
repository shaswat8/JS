class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}

const hitesh = new User("hitesh.ai", "1234")
console.log(hitesh.email); 