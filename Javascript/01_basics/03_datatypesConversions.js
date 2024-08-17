// Number to String
let score = 33
let convert = String(score);
console.log(convert);

// String to Number
let Name = "Vishal";
let calculate = Number(Name);
console.log(typeof calculate); //whenever we convert a string to number the type would be change to number but value would be print nan.

//number to boolean
let no = 0                      //if we get a number as 0 then value would be false otherwise it will be true.
let checkboolean = Boolean(no);
console.log(checkboolean);

//string to boolean
let computer = "Dell"       //if we take empty string "" it will print false 
let checkbooleanStr = Boolean(computer)
console.log(checkbooleanStr); 

//******************************************Operations**********************************************************************
//convert to negative value

let value = 78
let negvalue = - value
console.log(negvalue)

// concate string
let str1 = "Hello"
let str2 = " Vishal"
let str3 = str1 + str2
console.log(str3);

console.log(5+5+"6")
console.log("10"-5)
console.log(10=="10")

console.log(+true)
console.log(+"");

let gamecounter = 101
console.log(++gamecounter)