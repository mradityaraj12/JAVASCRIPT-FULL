/**
 * ! Example-1
 

var a=1;
let b=10;
const c=20;

    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
{
    console.log("inside is local block");
        
}

*/


/**
 * ! Example-2
 */
 
 var a=10;
 let b=20;
 const c=30;
   
   {
    console.log("Inside of local block");
          var a=20;
          // let b=40;
          // const c=50;
         console.log("a:",a);
         console.log("b:",b);
         console.log("c:",c);     
   }

console.log("Outside a Local Block");
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
