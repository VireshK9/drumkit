// Detecting button press
var buttonlength = document.querySelectorAll(".drum").length;

for (var i =0; i<buttonlength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);        
            
    })
}


//Detecting key press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

//common function
function makeSound (key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        default:
    } 
}