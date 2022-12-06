var buttonLength = document.querySelectorAll(".drum").length;

for (var i= 0; i<buttonLength ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio ("tom-1.mp3");
                tom1.play();
            break;
            
            case "a":
                var tom2 = new Audio ("tom-2.mp3");
                tom2.play();
            break;
            
            case "s":
                var tom3 = new Audio ("tom-3.mp3");
                tom3.play();
            break;

            default:console.log(this.innerHTML);
                break;
        }
        
    })
}


