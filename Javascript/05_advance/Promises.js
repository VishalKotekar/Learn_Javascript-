//async task 
//db task,cryptography,network


const PromiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async Task');
        resolve();
    },1000)
})

PromiseOne.then(()=>{
    console.log("resolved");
})


new Promise((resolve,reject)=>{
    console.log('Task complete');
    resolve()
}).then(function(){
    console.log("task completed");
})


const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({username:"vishal",email:"vishal@example.com"})

        }
        else{
            reject('This task not be done')
        }
    },1000)
})

PromiseThree.then((user)=>{
    console.log(user);
    return user.email
}).then((email)=>{console.log(email);
}).catch((reject)=>console.log(reject));


const PromiseFour = new Promise((resolve,reject)=>{
    let error = false
    if (!error) {
      resolve("Resolved")
    }
    else{
        reject("rejected")
    }
})

PromiseFour.then((resolve)=>{
    console.log(resolve);
    
}).catch((reject)=>{
    console.log(reject);
    
}).finally(()=>console.log("promise is either resolved or rejected"))

const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({username:'vishal',password:1234})
        }
        else{
            reject("error occured")
        }
    },1000)
});

async function PromiseFiveconsumption(){
    try {
        const response = await PromiseFive;
        console.log(response.username);
    } catch (error) {
        console.log(error);
    }
    
}
PromiseFiveconsumption()

// async function getAllusers(){
//     try {
//        const response =  await fetch('https://api.github.com/users/vishalKotekar')
//        const data = await response.json()
//        console.log(data);
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getAllusers()

fetch('https://api.github.com/users/vishalKotekar').
then((response)=>{
    return response.json()
}).
then((data)=>console.log(data)).
catch((error)=>console.log(error))
