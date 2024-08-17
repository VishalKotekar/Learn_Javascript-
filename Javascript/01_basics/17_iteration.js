// for(let i=0;i<=20;i++)
// {
//     console.log(i);
// }

//Nested loops
// for(let i=1;i<=10;i++)
// {
//     console.log(`this is Outer Loop ${i}`);
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`this is inner Lopp ${j}`);
//         for(let k=1;k<=5;k++)
//         {
//             console.log(`this is k loop ${k}`);
//         }
//     }
// }

let myarr=["superman","batman","ironman","superman"]
myarr.pop()
// for(let index=0;index<myarr.length;index++)
// {
//     const item = myarr[index];
//     console.log(item);
// }

// forof method for arrays looping

// for(const i of myarr)
// {
//     console.log(i);
// }

//for in method for array looping

// for (const value in myarr) {
//     console.log(value);
// }

// myarr.forEach(function(element){
//     console.log(element);
// })

// myarr.forEach(item=>{
//     console.log(item);
// })


// let index = 0;
// while(index<=10){
//     console.log(index);
//     index++;
// }

// let i=0;
// do {
//     const take = myarr[i]
//     console.log(take);
//     i++;
// } while (i<myarr.length);

//map always holds unique values it did not replicate the duplicate values 
//map is in the form of key value pair
const map = new Map

map.set("IN", "india")
map.set("USA", "United States Of America")
map.set("UK", "United Kingdom")

// for(const [key,value] of map)
// {
//     console.log(key, value);
// }

//in forin loop map does not print
// for(const key in map)
// {
//     console.log(key);
// }

const myobj ={
    game1:"pubg",
    game2:"freefire"
}
// we cannot print objects in forof loop
// for (const [key,value] of myobj) {
//     console.log(key,value);
// }

// for(const key in myobj)
// {
//     console.log(key, myobj[key]);
// }

// for (const key in myarr) {
//    console.log(myarr[key]);
// }

//passing prebuilt function in foreach 
// function printme(item){
//     console.log(item);
// }

// myarr.forEach(printme)

let arr=[
    {
        language:"javascript",
        type:"js"
    },
    {
        language:"python",
        type:"py"
    },
    {
        language:"java",
        type:"java"
    }
]
myarr.forEach((item,index,array)=>{
    console.log(item,index,array);
})

arr.forEach((key)=>{
    console.log(key.language);
})