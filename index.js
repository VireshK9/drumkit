
// Detecting a click 
var drumlength =document.querySelectorAll(".drum").length;

for (var i =0; i<drumlength ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        
    });
}

// detecting a key press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

// function for switch statment to make a sound

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
    
        default:console.log(this.innerHTML);
    }
};