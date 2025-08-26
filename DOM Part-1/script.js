/**
* Document.body
* Document.head
* Document.getElementById

*/
/**
 * Document.getElementById()
  
   const heading = document.getElementById("tital");
   heading.textContent="Namaste Developer";
  
    */

   /**
    * ! document.getElementByClassName("")
    * 
   

   const cards = Array.from(document.getElementsByClassName("card"))
   cards.map((element,index,array)=>{
        element.style.color="red";
   })
    
    */

   /**
    * ! document.getElementByTagName("")
    

   const divs = Array.from(document.getElementsByTagName("div"))
   console.log("divs :" , divs);

   */

/**
 * ! document.querySelector("")
 * 


const heading = document.querySelector("#tital")
console.log(heading)


const card = document.querySelector(".container > :last-child");
console.log(card);

 */

/**
 * ! document.querySelectorAll("")
 

const cards = document.querySelectorAll(".card");
console.log("cards:" , cards);


cards.forEach(task=element => element.style.color="blue");

*/


/**
 * ! Difference between Html Collection vs Nodelist
 */

const cardHtmlCollection= document.getElementsByClassName("card");
const cardNodelist=document.querySelectorAll(".card");

const c4 = document.getElementById("c4");
c4.remove();

console.log("cardHtmlCollection:" , cardsHtmlCollection)
console.log("cardsNodeList:" , cardNodelist);