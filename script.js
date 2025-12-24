let displayValue="";

function press(value){
    displayValue+=value;
    document.getElementById("display").value=displayValue;
}

function clearDisplay(){
    displayValue="";
    document.getElementById("display").value="";
}

function calculate(){
   try{
    displayValue=eval(displayValue).toString();
    document.getElementById("display").value=displayValue;
   } catch{
     document.getElementById("display").value="Error";
     displayValue="";
   }
}

function backspace(){
    displayValue=displayValue.slice(0,-1);
    document.getElementById("display").value=displayValue;
}