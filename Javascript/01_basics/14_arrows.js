//this keyoword refers to the current context

let myobj= {
    username:"vishal",
    pass:2345,
    welcomeMessege: function(){
        console.log(`${this.username},welcome to website`);
    }
}
myobj.welcomeMessege()
myobj.username = "Rahul"
myobj.welcomeMessege()

function chai() {
    let name = "ashish" 
    console.log(this.name);    
}
//we cannot access this keword inside the function directly
chai()
//Arrow funsction is used as a shorter syntaxes fo function
const add = (num1,num2) => {
    return num1+num2;
}
console.log(add(4,5));

const no = (num1,num2) => (num1+num2)
console.log(no(67,5));

const use_obj_arrow = () => ({username:"vishal",password:8276})
console.log(use_obj_arrow())


