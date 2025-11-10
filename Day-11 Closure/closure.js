/**
 * ! Lexical Scope:- (globle + script) Scope  +  task Scope
 *                      {task:false(){}}          {a:10}
 */                    

// const outer = 10;
   
//      function task() {
//         const a = 10;


//         console.log(a);
//         console.log(outer);

//      }

//      task();




const a = 200;
   
     function task1() {
        const b = 10;

         const task2 = () =>{
            const c = 20;
            console.log("inside Task-2");
            console.log("a:" , a)
            console.log("b:" , b)
            console.log("c:" , c)
         }
       task2();

     }

     task1();

     