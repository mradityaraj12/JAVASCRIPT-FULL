/**
 * !  document.createElement()
 * ! appendChild() :- Add element as theri last Child
 * ! append()
 * 
 */

const heading = document.createElement("h1");
heading.textContent="Aditya Raj..";

// heading.style.color="white";
// heading.style.fontsize="55px";
// heading.style.padding="20px";
// heading.style.backgroundcolor="red";

const ui=`color:white;
           font-size:55px;
           padding:22px;
           background-color:red;
           border:4px solid black `
    heading.style.cssText=ui

const body= document.body;
body.appendChild(heading);



/**
 * ! Internal CSS
 * 
 */

const style = document.createElement('style');
 
style.textContent=`h1{
                    
                     color:white;
                     font-size:55px;
                     padding:20px;
                     background-color:black;
                      }`;

      const head = document.head;
      head.appendChild(style);                
