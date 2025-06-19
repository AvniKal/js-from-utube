// Immediately Invoked Function Expression

(function chai(){
    // named IIFE
    console.log(`db connected`)
}) ();          // put semi-colon compulsary tabhi ye context stop hoga

// chai()


// ()() // 1st paranthesis func def and second parathesis is function execution

((name) => {                     // parameterised entry with the use of arrow function  
    // Unnamed IIFE
   console.log(`db connected , ${name}`);
}) ("avni");

