function Setusername(username) {
    this.username = username
}

function getusername(username,password,email) {
    Setusername.call(this, username);//call passes the current execution context to another function

    this.password = password
    this.email = email

}

const get = new getusername("vishal",1234,"vishal@gmail.com")
const set = new getusername("vish",12,"vihal@gmail.com")
console.log(get);
console.log(set);
