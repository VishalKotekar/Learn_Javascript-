let current_date = new Date()
console.log(current_date);
console.log(current_date.toString());
console.log(current_date.toDateString());
console.log(current_date.toISOString());
console.log(current_date.toJSON());
console.log(current_date.toLocaleDateString());
console.log(current_date.toLocaleString());
console.log(current_date.toTimeString());
console.log(current_date.toUTCString());

let specific_date = new Date(2002, 1, 3, 5, 4)
console.log(specific_date.toLocaleString());

let specific_date2 = new Date("2023/1/20")
console.log(specific_date2.toLocaleString());
console.log(Math.floor(Date.now()/1000));
console.log(specific_date.getTime());
console.log(specific_date2.getMinutes());

specific_date.toLocaleString('default',{
    weekday: "long",
    timeZone:"Asia/Kolkata"
})