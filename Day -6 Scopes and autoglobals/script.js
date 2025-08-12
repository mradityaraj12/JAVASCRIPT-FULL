/**
 * ! Example-1
 

var a=1;
let b=2;
const c=3;
{
    console.log("inside a local Block");
    var a=10;
    let b=20;
    const c=30;
    var d=40;
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);

}

console.log("outside a local Block")
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);

    */

    /**
     * ! Example-2

     
    var a=1;
    let b=2;
    const c=3;
    {
        console.log("Inside of Local block");
        a=10;
        b=20;
        d=30;  //Autoglobal:- When declaration part is not there

         console.log("a",a);
         console.log("b",b);
         console.log("c",c);
         console.log("d",d);
    }
    console.log("output is local block");
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);

    */

    /**
     * ! Example-3
     */
    var a=1;
        
    {
        console.log("inside a local block");
        a=10;
        b=20;   // Autoglobal
        d=30;   //  Temporal Dead Zone

        console.log("a",a);
        console.log("b",b);
        console.log("c",c);
     }

     console.log("output is local block");
           let c=2;
           console.log("a",a);
           console.log("b",b);
           console.log("c",c);