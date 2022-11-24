window.addEventListener("DOMContentLoaded", function(event){

});


let sections = document.querySelectorAll("body > main > section")
console.log(sections);

let position = sections[1].getBoundingClientRect().top;

document.addEventListener("wheel", function(event){
    if(event.deltaY > 0) // je vais vers le bas
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        scroll(0, currentScrollPosition + position);
    }
    if(event.deltaY < 0) // je vais vers le bas
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        scroll(0, currentScrollPosition - position);
    }
})