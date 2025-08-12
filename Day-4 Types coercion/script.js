/**
 * ! Example of Implicit Type coercion
 
const a="10";
const b=5;
const res= a - b;
console.log("res:",res);

*/

/**
 * ! Example of Explicit Type Coercion
 * 1. Number()
 * 2. Boolean()
 * 3. String()
 * 4. Symbol()
 * 5. BigInt()
 * 
 * ! Bonus:- Ecma Script-6
 * Number() ---> +


const a=10;
const b=Number(a);
console.log("b:",b);
console.log(typeof(b));
 
*/


const b="5";
const x=  +b;

console.log("x:",x)
console.log("X Type is:",typeof(x))


const userAge= +prompt("Enter userAge");
console.log("User:",userAge);
console.log("User type is:", typeof(userAge));
