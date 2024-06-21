console.log("Hello")

const display = document.getElementById("display");

function append(input){
     display.value +=input;
}

function clearDisplay(){
     display.value = "";
}

function calc(){
     display.value = eval(display.value)
}

function del(){
     display.value = display.value.slice(0, -1);
}