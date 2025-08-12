console.log("Start");

var a=1;
let b=2;
const c=3;

{
    console.log("inside a local bolck");
       var a=10;
        d=20;
       let c=30;
    

       console.log("a",a);
       console.log("b",b);
       console.log("c",c);
       console.log("d",d);
}
console.log("outside a local block");
       console.log("a",a);
       console.log("b",b);
       console.log("c",c);
       console.log("d",d);
  console.log("End");     