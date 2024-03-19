// Immediately Invoked Function Expressions (IIFE)

// iska use global variable ke declaration ke pollution se bachane ke liye 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
