var c =300
if(true){
    let a=10
    const b =20
    var c =30
    console.log(a);
    console.log(b);
    
 }
console.log(c);

function one(username){
    username = "vishal";
    function two(website){
        console.log(username);
        website= "google.com";
    }
    two()
}
one()

const myfun = function game(pubg) {
    return pubg="Action Game";
}
console.log(myfun()); //hoisting didn't work in this case
console.log(fun2());//hoisting work in this case 
function fun2(candy_crush) {
    return candy_crush = "fun game";
}

