

 
 let but=document.getElementById("add-element");
 but.addEventListener("click",function(){
   var  div1=document.getElementById("elements");
   div1.innerHTML=`<div class="element" id="elem">
   <h3>Element {element1, element2,element3}</h3>
   <h4>This is an element</h4>
   <button id="delete">Delete</button>
</div>`;
});
let deleteButton=document.getElementById("delete");

deleteButton.addEventListener("click" ,function(){

let myDiv=document.querySelectorAll("div.elements");

     
let myElement =  myDiv.div1[myDiv.selectedIndex].text;
return (myElement.innerHTML=" ");
});
