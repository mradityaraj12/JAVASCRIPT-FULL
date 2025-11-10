/**
 * ! Closure 
 *      Disadvantage:- High Memory Consumption 
 * 
 */



/**
 *  ! 1.Example


const outer=()=>{
    console.log("Inside outer function");


    const userId="4656";
    const password="Aditya@12";


    const inner=()=>{
        console.log("Inside Inner function");
        console.log("userId:",userId);
        console.log("password",password);
    }

    return inner;
}

const x=outer();

// x()

if (typeof(x)=="function")
{
    x()
}
else{
    console.log("x",x);
}

 */

/**
 * ! 2.Example 
 * ! High Memory Consumption 
 */

const adit=()=>{
    const a=110
    const b=200


    const inner1=()=>{
           console.log("Inside inner1 a:",a);
}

   const inner2=()=>{
    console.log("Inside inner2 b:",b);
   }
    
   return [inner1,inner2]
};

const [x1,x2]=adit();
x1();
x2();



/**
 * ! 3.Example
 

const outer=(p,q)=>{
    console.log("inside outer function...!");

    const inner=()=>{
        console.log("Inside inner function...!243");
        return p + q;
    }

    return inner;
}

const x1=outer(10,20);
const x2=outer(40,60);


// x1()
// x2()

console.log("x1:",x1());
console.log("x2:",x2());

*/

/**
 * ! 4.Example
 

const Aditya=(adi)=>{
    console.log("Inside Aditya function.....!");

    const Madhavi=(madh)=>{
        console.log("inside Madhavi function....!");
        console.log("adi",adi)
        console.log("madh",madh)
        return adi + madh;
    }
    return Madhavi;
}

const x=Aditya(20) (30)
console.log("x:",x);

*/

/**
 * ! =>  IIFE


(function fun1(){
    console.log("Inside function-1");


    let count=10;

    return function increment(){
        console.log("Inside Increment function");
        count++;
        console.log("count:",count);
    }
}) () ();

 */

/**
 * ! 6. Example last 
 */

// const x=(function fun1(){
//     let x=10;
//     return function increment (){
//         console.log("Inside Increment function..:");
//         x++;
//         console.log("x:",x);
//     }

// }) ()

// x()
// x()
// x()
// x()
// x()
