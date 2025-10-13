/**
 * ! Click
 * ! dbclick
 * ! mouserover
 */

/**
 * !  Click
 
function changeText(){
    const h1 = document.querySelector("h1");
    h1.textContent="Namaste Developer";
}

*/

/**
 * !  dbclick
 */

const button = document.querySelector("button");

button.addEventListener("dblclick", function(){
    alert("clicked.....");
}); 