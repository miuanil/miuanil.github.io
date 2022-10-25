$(() => {

    const hideAlert = () => {
        $("#alert").hide();
        $("#alert").text("");
    };

    const changeInputValue = (value) => {
        $("#question").val(value.result);

        $("#question").on('focus', function () {
            this.select();
        });
    };

    const fail = (value = 'Something went wrong!') => {
        $("#alert").text(value);
        $("#alert").show();
        setTimeout(hideAlert, 3000);
    };

    const pressEnter = (event) => {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            makeRequest();
        }
    };

    const makeRequest = () => {
        if ($("#question").val() === "") {
            fail("The Question field cannot be blank!");
        } else {
            $.get('/8ball', { question: $("#question").val() }).done(changeInputValue).fail(fail);
        }

        $('#question').blur();
    };

    $("#question").on('keypress', pressEnter);

    $("button").click(makeRequest); // using with the button

});