//singleton objects using constructor

const tinderuser = new Object
tinderuser.name ="Vishal",
tinderuser.email = "vishalkotekar0096@gmail.com",
tinderuser.email = "vishalkotekar0096@gmail.com",
tinderuser.pass = 4568220,
tinderuser.isloggedin = true
console.log(tinderuser);

const obj = {
    website : "google.com",
    technology :{
        javascript: {
            objects: "singleton",
            game : "web",
        }
    }

}
console.log(obj.technology.javascript.objects);

const obj1 = { 1: "one ", 2: "Two"}
const obj2 = { 3: "three", 4: "Four"}
const obj3 = {obj1,obj2}
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);
//using Spread Operator 
const obj5 = {...obj1,...obj2}
console.log(obj5);
//Access multiple objects in the array 
const arr = [
    {
        name: "vishal",
        roll_no: 18
    },
    {
        name: "vishal",
        roll_no: 19
    },
    {
        name: "vishal",
        roll_no: 20
    },
    {
        name: "vishal",
        roll_no: 21
    }
]

console.log(arr[2].roll_no);

//access keys,values,entries from objects

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'));

const destructuring = {
    main: "method",
    constructor: "objects"
}

const {main: m}  = destructuring
console.log(m);