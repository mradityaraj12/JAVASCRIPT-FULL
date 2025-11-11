/**
 * ! length:- Array size
 * ! index:- integer number starting from 0
 * ! array elements:- values written inside an array
 * ! array object object:- variable
 * ! square bracket:- []
 * ! Empty Array:- [] array without literals(values)
 */



/**
 * ! Ways to create an Array
 * Todo: 1. By using sqaure bracket and literals
 

const arr1 = [1, 2, 3, 4, 5];
console.log("arr1", arr1);
*/

/** 
 * Todo: 2. By using new keyword and Array Inbuilt constructor function
 */
  
//const skills=["HTML", "CSS", "JavaScript", ];

//const skills = new Array("HTML", "CSS", "JavaScript");
                //console.log("skills", skills);



 /**
  *  ! Array Inbuilt Methods              

  const arr= [10,20,30,40];
  arr.push(40);
  arr.pop()

  arr.unshift(10);
  arr.shift();

  const idx= arr.indexOf(40);
  console.log("Index:" , idx);

  const s1 = ["html" , "css" , "js" , "react"];
  const res = s1.includes("react");
  console.log("res:" , res);



  const arr1=[10,20,30,40,50];
    arr1.reverse();
    console.log("arr1:",arr1);

    */

    /**
     * ! Different Between Splice and Slice ?
     */


     /**
      * ! Splice :- Insertion , Deletion And Updation
      *  a :- Stsrting Index
      *  b :- No of Element to be Deleted
      *  c :- New values to be added
      *  ! It is modifies the Original Arrary
      *  ! It is Return arrary of deleted element
      

     const arr=["html" ,"corejava" , "js" , "Script"];
     const x = arr.splice(1,2,"css", "js","sass");
     console.log("arr:",arr);
     console.log("x:",x);

     */

     /**
      * ! Slice(a,b)
      * a :- Starting index
      * b :- last index + 1
      * ! It returns a new array 
      *  ! It doen't modify the original array
      

     const arr = ["html" , "css" , "js" , "java" , "Sql" ,"DSA"];

     const newArray = arr.slice(0,3)
     console.log("New Array : " , newArray)

     */ 


     /**
      * ! Revers
      * ! indexOf()
     

     const arr1 = [10, 20, 30, 40, 50];
     arr1.reverse();

     console.log(arr1);


     const arr2 = ["java", "js", "css", "go", "php", "py"];

    //  const x = arr2.indexOf("java",0);
    //   console.log(x);


    const y = arr2.includes("go");
    console.log(y);

     */ 

    /**
     * ! Sort()
     * 
   

    const arr3 = [10, 5, 20, 15, 30,2, 40];
    arr3.sort((a,b) => b -a);
    console.log("arr3:", arr3);
  */

    /**
     * ! forEach(CallBack) = HOF-> Higher Order function.
   

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const output = []

    // arr.forEach(function(element){
    //        output.push(element*10)



      // output.push(math.pow(element,2));


       arr.forEach(function(element,index,array){

        array[index] = element*10;

        
            });

    // console.log(output);

       console.log(arr);

         */

       /**
        * ! Map(CallBack) = HOF
        *  it returns Modified Array.
        * 
        */

      //  const arr = [1, 2, 3, 4, 5];

               //  const x = arr.map(function(element){
               //      return element*10;
               //  });

   // ! Problem-1
   
             //  const x = arr.map(function(element){
             //           element*10;
             //      });

  // ! Problem-2 
      // const x = arr.map(function(element)

      // {
      //          if(element < 4)
      //          {
      //             return element*10;
                  
      //           }     
               
      //  });


      //  console.log("x :" , x);


/** 
 * ! Filter(callBack)
      

      const arr = [10,20,30,40,50];

      const y = arr.filter(function(element)
                                       {
                                         if (element< 40){
                                           return true;
                                         }
                                        //  else{
                                        //    return false;
                                        //  }
                                      
                                      } );
  console.log("y :" + y);
 */



  //  const arr = [10,20,30,40,50];

  //     const y = arr.filter((element) =>{
                                       
  //                                        if (element <= 30){
  //                                         //  return element*10;

  //                                         return true;
  //                                        }
                                       
                                      
  //                                     } ).map((val) => val*10);
  // console.log("y :" + y);
   


    /**
     
    *  ! Single Line Filter.
    
        
      const arr = [10,20,30,40,50];

      const y = arr.filter((element) => element< 40);
                                                                    
                                          
                 console.log("y :" + y);

       */    

/**
 * !Sorting
 

      const arr = [10,20,30,40,50];

      const y = arr.filter(function(element)
                                       {
                                         if (element< 40){
                                           return true;
                                         }
                                         else{
                                           return false;
                                         }
                                      
                                      } );
   y.sort((a,b) => a-b);
  console.log("y :" + y);

  */

  /**
   * ! Reduce(CallBack , initial Value of Accumulator)
   * ! Accumulator = total = addtion = Sum.
   */

  // const arr = [10, 20, 30, 40, 50,60]

  // let sum = 0;

  // for(let i = 0; i<arr.length-1;i++){
  //    sum = sum + arr[i]

  // }

  // console.log("Sum :" , sum);





  // const arr = [10, 20, 30, 40, 50,60]
  //  const total = arr.reduce(function(Accumulator,element)
  //                                         {
  //                                            Accumulator = Accumulator + element;
  //                                            return Accumulator;

  //                                         },0);

  //     console.log("Total Accumulator :" , total);  
  
  
  /**
   * ! Single Line Reduce(CallBack).
  
 */

  const arr = [10, 20, 30, 40, 50,60]
   const total = arr.reduce((Accumulator,element) => {
                                       
                                             Accumulator = Accumulator + element;
                                             return Accumulator;

                                          },0);

      console.log("Total Accumulator :" , total);     
        

