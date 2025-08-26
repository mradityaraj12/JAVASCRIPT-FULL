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
      * 
      */