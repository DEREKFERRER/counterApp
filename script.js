let counter = 0
document.getElementById("demo").innerHTML = counter

function leftButton(){
    counter--;
    document.getElementById("demo").innerHTML = counter
}
function rightButton(){
    counter++;
    document.getElementById("demo").innerHTML = counter
}

function resetCounter(){
    counter = 0;
    document.getElementById("demo").innerHTML = counter;
}