const buttonss = document.querySelectorAll(".drum");

const letterss = Array.from(buttonss);

const sounds = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3"
];


letterss.forEach(function(button) {

    button.addEventListener("click", function() {

        const position = letterss.indexOf(this);

        const audio = new Audio(sounds[position]);

        audio.play();

    });

});


document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();

    const position = letterss.findIndex(function(button) {
        return button.textContent.toLowerCase() === key;
    });

    if (position !== -1) {

        const audio = new Audio(sounds[position]);

        audio.play();

    }

});