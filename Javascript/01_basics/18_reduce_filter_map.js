const arr=["Marvel","DC","WB","Disney"]
//foreach loop cannot return a value
// let holding=arr.forEach((item)=> console.log(item))

// console.log(holding);
    const myNum=[1,2,3,4,5,6,7,8,9,10,10]
// let num=myNum.filter((element)=>element<5)
// console.log(num);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks=books.filter((key)=>key.edition==2007 && key.genre=="History")
userBooks=books.filter((key)=>key.publish>2000)
console.log(userBooks);

// const check = myNum.map((num)=> num+=1)
// console.log(check);

//chaining

const newNum =   myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>30)

                console.log(newNum);

function add(num1,num2){
    console.log(num1+num2);
} 
add(4,3)

let digits_arr=[1,2,3,4]
// let myTotal=digits_arr.reduce(function(acc,curr){
//         console.log(`acc:= ${acc}, curr:=${curr}`);
//         return acc+curr
// },0)

let myTotal=digits_arr.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

let shopping_cart=[
    {
        price: 399,
        itemName:"javascript Course"
    },
    {
        price: 499,
        itemName:"Aws Course"
    },
    {
        price: 299,
        itemName:"java course"
    },
    {
        price: 999,
        itemName:"Web development"
    }

]

let Total_Payment=shopping_cart.reduce((acc,item)=> acc+item.price,0)
console.log(Total_Payment);