//this keyword refers to the current context
//new keyword is the constructor fn 
//and new keyword creates a new context


function user(username,password,logincount){
    this.username = username
    this.password = password
    this.logincount = logincount
    return this
}

const user1 = new user("vishal",123,true)
const user2 = new user("shal",12,false)
console.log(user1);
console.log(user2);
