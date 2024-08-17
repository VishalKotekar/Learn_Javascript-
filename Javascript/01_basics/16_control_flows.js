let first= '3'
if(2==3){
    console.log(`the number is same`);
    if (3!=2) {
        console.log('right');
    }
}
else if(first){
    console.log("wrong");
}
//falsy values 
// 0,Bigint,-0,0n,null,undefined,''
let month = 3
switch (month) {
    case 1:
        console.log(`jan`);
        break;
    case 2:
        console.log(`feb`);
        break;
    case 3:
        console.log(`march`);
        break;
    case 4:
        console.log(`apr`);
        break;        
    
    case 5:
        console.log(`jun`);
        break;        
          
    default:
        console.log("you entered wrong value");
        break;
}


let score

score = null ?? 20  //nullish coalescing operator
console.log(score);

let isloggedin = true
isloggedin == true ? console.log("user loggedin"):console.log("user not loggedin");
//? ternary operator used as a short form of if else statements 

