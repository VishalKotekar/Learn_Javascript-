let Mysym = Symbol('&');
let Jsuser = {
    name : "vishal",
    [Mysym]: "&&",
    ac_no : 196317124,
    city : "ichalkaranji",
    password: 12345
}
// console.log(Jsuser);
// console.log(Jsuser['city']);
// console.log(Jsuser['name']);

Jsuser['city'] = "pune";
//console.log(Object.freeze(Jsuser));
Jsuser.city = "Mumbai"
// console.log(Jsuser)
console.log(typeof(Jsuser));

Jsuser.greeting = function () {
    console.log("hello My name is Vishal ");
}
Jsuser.greetingtwo = function(){
    console.log(`My name is ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
