$(() => {

    $("button#add").click(() => {

        const data = {
            id: $("input:hidden[name=id]").val(),
            name: $("input:hidden[name=name]").val(),
            price: $("input:hidden[name=price]").val(),
        };

        const success = (response) => {

            $('div.cartBasket span#labelCartCount').text(response.cartTotal);

            swal.fire({
                text: "Item successfully added to your cart",
                icon: 'success',
                footer: '<a class="goToTheCart" href="/cart">GO TO THE CART</a>'
            });

        };

        const fail = (errResponse) => {
            swal.fire({
                title: 'Error',
                text: errResponse.statusText,
                icon: 'error',
            });
        };

        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(success).fail(fail);

        return false;
    });
});