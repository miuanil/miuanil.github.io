window.onload = function() {
    "use strict";
    // put all of your code here

    var interval, splittedValues;

    document.getElementById("start").onclick = function() {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;

        splittedValues = document.getElementById("text-area").value.split("=====\n");

        displayInterval(250);
    };

    document.getElementById("stop").onclick = function() {
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("animation").disabled = false;

        document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];

        clearInterval(interval);
    };

    document.getElementById("animation").onchange = function(event) {
        document.getElementById("text-area").value = ANIMATIONS[event.target.value];
    };

    document.getElementById("fontsize").onchange = function(event) {
        var sizeArray = {"Tiny": "7pt", "Small": "10pt", "Medium": "12pt", "Large": "16pt", "Extra Large": "24pt", "XXL" : "32pt"};
        document.getElementById("text-area").style.fontSize = sizeArray[event.target.value];
    };

    document.getElementById("turbo").onclick = function(event) {
        var speed = event.target.checked ? 50 : 250;

        if (document.getElementById("start").disabled === true) {
            displayInterval(speed);
        }
    };

    function displayInterval(speed) {
        clearInterval(interval);
        interval = setInterval(function() {
            var currentAnimation = splittedValues.shift();
            document.getElementById("text-area").value = currentAnimation;
            splittedValues.push(currentAnimation);
            currentAnimation = splittedValues;
        }, speed);
    }
};