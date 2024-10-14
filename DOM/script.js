// DOM-Document Object Model

//4 pillars of DOM

//-selection of an element

//changing html

//changing css

//event listener
/* 
document.querySelector('h2')
document.querySelector('#box')
document.querySelector('.cls')
document.querySelector('#nav h1')
*/

var a=document.querySelector('h1')
console.log(a);

a.innerHTML="changed"
a.style.color ='red'
a.style.backgroundColor ="green"