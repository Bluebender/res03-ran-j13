window.addEventListener("DOMContentLoaded", function(event){

});

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

// function getNextSection(current){
//     if (current.id==="red"){
//         return document.getElementById("orange");
//     }
//     if (current.id==="orange"){
//         return document.getElementById("yellow");
//     }
//     if (current.id==="yellow"){
//         return document.getElementById("green");
//     }
//     if (current.id==="green"){
//         return document.getElementById("blue");
//     }
//     if (current.id==="blue"){
//         return document.getElementById("purple");
//     }
// }

let compteurScroll = 0

document.addEventListener("wheel", function(event){
    if(compteurScroll>=3){
        compteurScroll=0
    }
    compteurScroll = compteurScroll +1;
    
    if(event.deltaY > 0) // je vais vers le bas
    {
        
        
        console.log(compteurScroll);
        if (compteurScroll===3){       

            let currentScrollPosition = document.documentElement.scrollTop;

            if (currentScrollPosition===positionRed){
                scroll(0, positionOrange);
                
            }
            if (currentScrollPosition===positionOrange){
                scroll(0, positionYellow);
            }
            if (currentScrollPosition===positionYellow){
                scroll(0, positionGreen);
            }
            if (currentScrollPosition===positionGreen){
                scroll(0, positionBlue);
            }
            if (currentScrollPosition===positionBlue){
                scroll(0, positionPurple);
            }
        }
    }

    else if(event.deltaY < 0) // je vais vers le haut
    {
        console.log(compteurScroll);
        if (compteurScroll===3){  
            
            let currentScrollPosition = document.documentElement.scrollTop;

            if (currentScrollPosition===positionPurple){
                scroll(0, positionBlue);
            }
            if (currentScrollPosition===positionBlue){
                scroll(0, positionGreen);
            }
            if (currentScrollPosition===positionGreen){
                scroll(0, positionYellow);
            }
            if (currentScrollPosition===positionYellow){
                scroll(0, positionOrange);
            }
            if (currentScrollPosition===positionOrange){
                scroll(0, positionRed);
            }
        }
    }
    
})