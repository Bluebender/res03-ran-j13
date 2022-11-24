window.addEventListener("DOMContentLoaded", function(event){

});

let body = document.querySelector("body");

let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");

let positionRed = red.getBoundingClientRect().top;
let positionOrange = orange.getBoundingClientRect().top;
let positionYellow = yellow.getBoundingClientRect().top;
let positionGreen = green.getBoundingClientRect().top;
let positionBlue = blue.getBoundingClientRect().top;
let positionPurple = purple.getBoundingClientRect().top;

console.log(positionRed, positionOrange, 
positionYellow, positionGreen, positionBlue, positionPurple);

let currentScrollPosition = document.documentElement.scrollTop;
console.log(currentScrollPosition);

function getNextSection(current){
    if (current.id==="red"){
        return document.getElementById("orange");
    }
    if (current.id==="orange"){
        return document.getElementById("yellow");
    }
    if (current.id==="yellow"){
        return document.getElementById("green");
    }
    if (current.id==="green"){
        return document.getElementById("blue");
    }
    if (current.id==="blue"){
        return document.getElementById("purple");
    }
    
    
    
}







document.addEventListener("wheel", function(event){
    
    if(event.deltaY > 0) // je vais vers le bas
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        console.log(positionRed);
        
        if (currentScrollPosition===positionRed)
        // let positionToGo = positionOrange;
        scroll(currentScrollPosition, positionGreen);
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
        let positionToGo = -400;
        scroll(0, positionToGo);
    }
    
})