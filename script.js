
const AllDrumButtons = document.querySelectorAll(".drum")

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    AllDrumButtons[i].addEventListener("click",function(e){
        let drumKeys = AllDrumButtons[i].innerHTML;
        playAudio(drumKeys);
        keyAnimation(drumKeys.toLowerCase());
    })    
}

document.addEventListener("keypress",function(e){
    playAudio(e.key.toUpperCase());   
        keyAnimation(e.key.toLowerCase());
    
})

function playAudio(key){
    switch (key) {
        case "W": 
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "A": 
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "S": 
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "D": 
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "J": 
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "K": 
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "L": 
                let bass = new Audio('sounds/kick-bass.mp3');
                bass.play();
            break;
    
        default:
                console.log(key);    
            break;
    }
}

function keyAnimation(key){
    let currentKey = document.querySelector("."+key);
    currentKey.classList.add("pressed")

    setTimeout(function(){
        currentKey.classList.remove("pressed")
    },80)
}