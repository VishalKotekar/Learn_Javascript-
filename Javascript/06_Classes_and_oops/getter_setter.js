const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your email: ', (email) => {
    // Create a new User instance with the input email
    const userInstance = new User("defaultPassword", email);

    // Log the email and password
    console.log('Email:', userInstance.email);
    console.log('Password:', userInstance.password);

    rl.close();
});

class User {
    constructor(password, email) {
        this.password = password;
        this.email = email;
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
