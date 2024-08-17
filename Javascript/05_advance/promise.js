// async function getApi(){
//   try{  const response = await fetch("https://api.github.com/users/vishalKotekar")
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getApi()

fetch("https://www.youtube.com/watch?v=e25zWcOnrh8").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);

})