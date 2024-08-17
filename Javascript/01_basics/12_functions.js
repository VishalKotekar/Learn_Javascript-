function first(num1,num2/*parameters*/ ){
    console.log(num1+num2);
   
}

const result=first(5,8)//arguments
console.log(result)

function Loginusername(username){
    if(!username){
        console.log("enter the username");
    }
    else{
        return `${username} just logged in`
    }
}
console.log(Loginusername())


function cart(val,val2,...prices){
    return `this is the ${val} ${val2} ${prices}rs prices of shoes variety`
}

console.log(cart(20,30,50,60,70));


const user ={
    username: "hitesh",
    price: 199
}

function handleobj(anyobj){
  return `username is ${anyobj.username} and price is ${anyobj.price}`
}
console.log( handleobj({
    username:"sam",
    price: 499
}));
let arr = [1,2]
function handling_arr(getvalue){
    return getvalue[1]

}
console.log(handling_arr(arr))
