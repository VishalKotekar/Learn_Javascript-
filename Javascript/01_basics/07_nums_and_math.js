let score = -100
console.log(score);

let total_score = new Number(200)
console.log(total_score);

console.log(total_score.toString().length);
console.log(typeof(total_score))
console.log(total_score.toFixed(2));//adds only 2 decimal points at the end 

const value =  1768.34567
console.log(value.toPrecision(4));
const meter = 10000000000;
console.log(meter.toLocaleString('en-In'));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(score));
console.log(Math.round(4.5))
console.log(Math.ceil(4.1));
console.log(Math.floor(6.9));
console.log(Math.min(10,3,2,5));
console.log(Math.max(55,78,23,12));
console.log(Math.round(Math.random()*10) + 1);

const min = 30
const max = 50
console.log(Math.round(Math.random()*(max-min+1)+min));