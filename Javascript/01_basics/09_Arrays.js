const Myarr = [ 0, 1, 2, 3, 4, 5, true, "Vishal"] //Arrays are resizable and array in js can store different datatypes values.
//whenever we perform to copy a value from Array it uses  Shallow Copy for memory Allocation that means it's properties uses same reference
// console.log(Myarr[7]);

//Array Methods

let Mynewarr = [ 1, 2, 3, 4, 5, 6]
//Mynewarr.push(7) //push method always adds an element at the end of array 
// Mynewarr.pop() //pop method always removes last element of array
// console.log(Mynewarr);
// Mynewarr.unshift(10);//unshift method always add an element at the start of array
//Mynewarr.shift(); //shift method always removes an element from the start of an array 
// console.log(Mynewarr);


console.log(Mynewarr.slice(1, 3));
console.log("slice method original string",Mynewarr);
console.log(Mynewarr.splice(1,3)); 
console.log("splice method original string",Mynewarr);

// the mainly difference between slice and splice method  is slice method does not manipulate the original array 
// but in the splice it removes the spliced elements from array

console.log(Mynewarr.concat(Myarr));
console.log([...Myarr, ...Mynewarr]); //spread

let major_arr = [ 1, 3, 4, 5, [ 6, 7], [ 8, 9 ,[ 10, 11]]]
console.log(major_arr.flat(3));//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(Array.isArray(["Vishal"]));
console.log(Array.from("Array_Convert"));// it covert in array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));