window.onload = function() {
    "use strict";
    // put all of your code here

    var interval, splittedValues;
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var animationSelect = document.getElementById("animation");
    var sizeSelect = document.getElementById("fontsize");
    var speedCheckbox = document.getElementById("turbo");
    var textArea = document.getElementById("text-area");


    startButton.onclick = function() {
        stopButton.disabled = false;
        startButton.disabled = true;
        animationSelect.disabled = true;

        splittedValues = textArea.value.split("=====\n");

        displayInterval(250);
    };

    stopButton.onclick = function() {
        startButton.disabled = false;
        stopButton.disabled = true;
        animationSelect.disabled = false;

        textArea.value = ANIMATIONS[animationSelect.value];

        clearInterval(interval);
    };

    animationSelect.onchange = function(event) {
        textArea.value = ANIMATIONS[event.target.value];
    };

    sizeSelect.onchange = function() {
        var sizeArray = {"Tiny": "7pt", "Small": "10pt", "Medium": "12pt", "Large": "16pt", "Extra Large": "24pt", "XXL" : "32pt"};
        textArea.style.fontSize = sizeArray[event.target.value];
    };

    speedCheckbox.onclick = function() {
        var speed = event.target.checked ? 50 : 250;

        if (startButton.disabled === true) {
            displayInterval(speed);
        }
    };

    function displayInterval(speed) {
        clearInterval(interval);
        interval = setInterval(function() {
            var currentAnimation = splittedValues.shift();
            textArea.value = currentAnimation;
            splittedValues.push(currentAnimation);
            currentAnimation = splittedValues;
        }, speed);
    }
};