class User {
    constructor(password, email) {
        this.password = password; // This will invoke the setter for password
        this.email = email; // This will invoke the setter for email
    }

    get email() {
        if (this._email && this._email.includes('@')) {
            return this._email;
        } else {
            return `${this._email}@gmail.com`;
        }
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

const userInstance = new User("abc", "vishal");
console.log(userInstance.email); // Should print "vishal@gmail.com"
console.log(userInstance.password); // Should print "ABC"
