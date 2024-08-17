// Immediately Invoked Functions (IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("vishal");

// a function whose runs immediately after it's declaration is called as IIFE
// to avoid global scope Pollution we use IIFE 

(function vishal(){
    console.log("Vishal");
})();

((score) => {
    console.log(score);
})("vs")