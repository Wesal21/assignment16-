var calcuate=document.getElementById("Calculate");

calcuate.addEventListener( "click",chooseAsign);

function displaySigns(){
    signMenu=document.getElementsByClassName("signMenue").value;
    signMenu.contextmenu="+";
}

function chooseAsign() {

     var sign=document.getElementById("menu");
     
     var selectedSign = sign.options[sign.selectedIndex].text;
if(selectedSign=="+"){ 
     sum() ;}
    if (selectedSign=="-"){
        return sub();
    }
    if (selectedSign=="*"){
        return mult();
    }
    if (selectedSign=="/"){
        return div();
    }  
}

function sum(){
   let number1=document.getElementById("value1").value;

 let number2=document.getElementById("value2").value;
 let result=(document.getElementById("result"));
let calculationResult = Number(number1)+Number(number2);

return (result.value= calculationResult);

}
function sub(){
   let number1=document.getElementById("value1").value;

 let number2=document.getElementById("value2").value;
 let result=(document.getElementById("result"));
let calculationResult = Number(number1)-Number(number2);

return (result.value= calculationResult);

}
function mult(){
   let number1=document.getElementById("value1").value;

 let number2=document.getElementById("value2").value;
 let result=(document.getElementById("result"));
let calculationResult = Number(number1)*Number(number2);

return (result.value= calculationResult);

}

function div(){
   let number1=document.getElementById("value1").value;

 let number2=document.getElementById("value2").value;
 let result=(document.getElementById("result"));
 if(number2!==0)
 calculationResult = Number(number1)/Number(number2);

return (result.value= calculationResult);

}
