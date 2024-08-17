// class user{
//     constructor(username,email){
//         this.username =username
//         this.email= email
        
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const username = new user("vishal","example @gmail.com")
// console.log(username.changeUsername());

// behind the scene
function user(username,password){
    this.username= username
    this.password = password
}

user.prototype.changeUsername = function() {
    return`${this.username.toUpperCase()}`
}

const change = new user("Ashish",123);
console.log(change.changeUsername());
// classes in javascript are only syntactically sugar in behind the scene it's works along with the prototypes and objects