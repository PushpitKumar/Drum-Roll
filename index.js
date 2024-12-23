for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonClicked = this; //This indicates the button which was clicked. That is the html element will get stored in buttonClicked variable
    switch (buttonClicked.innerHTML) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            buttonAnimation(buttonClicked.innerHTML);
            break;
        default:
            break;
    }
}

document.addEventListener("keydown", function(e) { //e is the event i.e keydown which has a property key 
    //console.log(e); To log the event object
    var keyPressed = e.key;
    switch (keyPressed) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            buttonAnimation(keyPressed);
            break;
        default:
            break;
    }
});

function buttonAnimation(buttonPressed) {
    document.querySelector("." + buttonPressed).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + buttonPressed).classList.remove("pressed");
    }, 100);
}