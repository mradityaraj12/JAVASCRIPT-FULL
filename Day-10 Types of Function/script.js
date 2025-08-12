/**
 * ! 1. Function Declaration Statement
 
function greet(user){
    console.log(user)
}

greet()
*/

/**
 * ! 2. First class function or Function as Expression
 
const greet=function fun(user){
    console.log("Username:",user)
    return 10;
}
greet()


*/


/**
 * ! 3. Immediately Invoked Function Expression (IIFE)
 * TOdo:- It is Runs only one time
 

(function greet(user){
    console.log(`Namaste Developer ${user}`);
} )

("Aditya Raj");
*/


/** 
const res=(function   (){
    console.log("kya kar raha h re......!")
    return `Tu Samajh `
}) ()

console.log("res:",res);

*/


/**
 * ! 4. Arrow Function (=>)-FAt operator
 * Todo:- It is added in ES6,
 * Todo:- this keyword is not inside arrow function
 */

// Implict Return type arrow function
 
 const greet1 = (user) =>  console.log(`Hay Hello ..${user}`);


 // Explicit Return type Arrow Function 
  
  const greet2 = (user) => {
         console.log(`namaste ${user}`)
         return "Aditya"
  }
 


 