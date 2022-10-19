"use strict";

$(function () {

    let hit = false;
    let win = false;

    $("div#start").on('click', function (e) {
        resetTheGame();
        $("div#maze div.boundary").on('mouseover', fail);
        $("#maze div#end").on('mouseover', finish);
    });

    function finish() {
        if (!hit && !win) {
            changeStatus("You win!");
            win = true;
            setTimeout(makeStatusDefault, 3000);
        }
    }

    function fail() {
        if (!hit && !win) {
            $('div#maze div.boundary').addClass('fail');
            changeStatus("You lose!");
            hit = true;
            setTimeout(makeStatusDefault, 3000);
        }
    }

    function changeStatus(text) {
        $("h2#status").text(text);
    }

    function resetTheGame() {
        makeStatusDefault();
        hit = false;
        win = false;
        $("div#maze div.boundary").removeClass("fail");
    }

    function makeStatusDefault() {
        changeStatus('Click the "S" to begin.');
    }

});