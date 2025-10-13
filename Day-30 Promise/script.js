/**
 * ! Promise() Constructor
 

const  p1 = new Promise(function task(resolve,reject)
                          {
                                setTimeout(A = () => {

                                    resolve("Promise Pura Hua....");
                                } , 3000);
                        
                        });

          console.log("p1 :" , p1);    
          
   */
  
          
          
 /**
  * ! Example 1
  *  
  */

 const p1 = new Promise((resolve,reject) =>
                          {
                                     setTimeout(() => {
                                        
                                         // resolve("Aditya ");

                                         reject("promise Pura nhi hua....");


                                     } , 5000);
                         });
 p1
 .then(
    function success1(val)

    {

       // console.log(val);
        val = val + " RAj ";
        return val;
    },
    function error1(reason)
    {
        console.log("reason Is :" , reason);
        //  throw new Error("Something went wrong....");

       const p2 = new Promise((resolve , reject) => {
                    setTimeout(() => {
                        reject ("Promise firse se pura nhi hua ....");
                    } , 5000);
       })

       return p2;

    }
)   

.then(
    function success2(fullname)
    {
        console.log(fullname);

    },
    function error2(reason)
    {
        console.log(reason);
    }
)

.catch(function globalError(err){
    console.log(err.message);
})


