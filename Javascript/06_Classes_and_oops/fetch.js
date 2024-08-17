fetch("https://Real-Time-Amazon-Data.proxy-production.allthingsdev.co/v2/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&category_id=null&min_price=105&max_price=110&brand=null")
.then((resolve)=>{
    return resolve;
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>console.log(error))