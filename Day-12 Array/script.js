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

  // const arr = [10, 20, 30, 40, 50,60]
  //  const total = arr.reduce((Accumulator,element) => {
                                       
  //                                            Accumulator = Accumulator + element;
  //                                            return Accumulator;

  //                                         },0);

  //     console.log("Total Accumulator :" , total);     
        

      /**
      * ! Card Desigin.
       


      const cart=[
        {
        Item: "Coke Diet",
        category: "Cold drink",
        price: 40
        },
        {
          Item: "Maggie",
        category: "Noodle",
        price: 30
        },
        {
        Item: "Chings Noodle",
        category: "Noodle",
        price: 150
        },
        {
        Item: "Campa",
        category: "Cold drink",
        price: 20
        },
        {
        Item: "Cadbury",
        category: "chocolate",
        price: 240
        },
      ];

        const result= cart.filter(function(element){
          
          if( element.category.toLocaleLowerCase() "Chocolate") {
            return true;
          }

        });
  console.log("Result:" , result);

*/



 /**
  *! example of reduce methods
  


  const arr = [10, 20, 30, 40, 50]

  const x = arr.reduce((acc , element) => {
    if(element < 40){
      acc.push(element * 10)
    }

    return true;
  }, []);

  console.log("x :" , x);

  */

  /**
   * ! REduceRight(CallBack)
   * ! Some (CallBack) => At Lest One Element Are Present.
   * ! Every(CallBack)
    

  const cart=[
        {
        Item: "Coke Diet",
        category: "Cold drink",
        price: 40
        },
       

         {
        Item: "PowerBank",
        category: "Electronice",
        price: 9200
        },

        {
        Item: "Phone",
        category: "Electronice",
        price: 240000
        },

         {
        Item: "Charger",
        category: "Electronice",
        price: 2050
        },

        {
        Item: "Cadbury",
        category: "chocolate",
        price: 240
        },

        {
        Item: "AirPods",
        category: "Electronice",
        price: 19200
        }
      ];

      // const  res1 = cart.some((element , i) => {
      //   console.log("i:" , i);
      //   if(element.category.toLocaleLowerCase() === "electronics"){
      //     return true;

      //   }

      // });

      // console.log("res1:" , res1);


      const  res2 = cart.every((element , i) => {
        console.log("i:" , i);
        if(element.category.toLocaleLowerCase() === "electronics"){
          return true;

        }

      });

      console.log("res2:" , res2);

*/



/**
 * ! Find(CallBack)   => Single First Occurence Element Ehice FullFile the Condition. 
 * ! FindLast(CallBack)
 

 const cart=[
  
         {
        Item: "PowerBank",
        category: "Electronice",
        price: 9200
        },

        {
        Item: "Phone",
        category: "Electronice",
        price: 240000
        },

         {
        Item: "Charger",
        category: "Electronice",
        price: 2050
        },
        
         {
        Item: "Smart Charger",
        category: "Electronice",
        price: 20500
        },

        {
        Item: "AirPods",
        category: "Electronice",
        price: 19200
        },

         {
        Item: "AirTag",
        category: "Electronice",
        price: 2100
        }

      ];


      const filterItem1 = cart.filter(elemnt => {
            if(elemnt.price < 2500){
              return true;
            }
      });


      // const FindItem = cart.find(elemnt => {
      //       if(elemnt.price < 2500){
      //         return true;
      //       }
      // });


      console.log("FilterItem :" , filterItem1);
      // console.log("FindItem :" , FindItem);


      */



/**
 * ! Array Constructor :- Array()
 * ! Fill(Value , Start , End)
 

   const arr = new Array(5);

  //  arr = [__ , ___, ___, ___, ___] => [0,0,0,0,0]

   // arr.fill(0,1,4);

   const x = arr.fill("").map((element , index) => {
    element = element + index ;

       return element;
   });

   console.log("x:" , x);

*/


  //  const arr = new Array(5);
  // const x = arr.fill().map((element , index,array) => {
  //   if(index === 0 || index === array.length-1){
  //     return element;
  //   }else{
  //     return index;
  //   }
  // });

  // console.log(x)




/**
 * ! Array.isArray()


const x = Array.isArray(0);
const y = Array.isArray({});
const z = Array.isArray([]);
const p = Array.isArray();

console.log("x:" , x);
console.log("Y:" , y);
console.log("Z:" , z);
console.log("P:" , p);

   */


/**
 * ! Array.From()
 * 


const String ="JavaScript";
const res = Array.from(String);
console.log("String of Res :" , res);

*/



// const obj ={name: "Aditya" , age: 22};
// const res1 = Array.from(obj);


// console.log("String of Res :" , res1);

/**
 * ! join()
 * ! flat()
 

// const arr = [1, [2, 3, 4],5];

// const x = arr.flat();

// console.log(x);


// const arr = [1, [2, [3, 4],5],6];

// const x = arr.flat(Infinity);

// console.log(x);


const arr = [1, [2, [3, 4],5],6];

const x = arr.flat(Infinity);

console.log(x);
const arr1 = [10,   , [20,30],40]
const y = arr1.flat();
console.log("Y:", y);

*/


/**
 * ! Join()
 

const arr1 = ["js" ,  "is", "most", "loved", "Most" , "language"];


const s1 = arr1.join(" ");

console.log("s1:",s1);


const arr2 = ["Aditya","Madhavi","Raj"];

const x = arr2.join(" ");

console.log("x:" , x);

*/

/**
 * ! Reduce Right (CallBack , Initial Value)
 */

const arr = [10,20,30,40,50,60];
   const total = arr.reduceRight((acc ,element) => {
               console.log("Element:" , element);
               acc = acc + element;
               console.log("Acc :" , acc); 
               return acc;
   })

   console.log("Total Accumulator :" , total);
