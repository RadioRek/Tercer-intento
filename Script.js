
// time function
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros to single-digit minutes and seconds
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Format the time as "hh:mm:ss AM/PM"
    let timeString = hours + ":" + minutes + ":" + seconds;

    // Update the clock HTML element
    document.getElementById("clock").innerHTML = timeString;
}

// Call updateClock every second
updateClock();
setInterval(updateClock, 1000);



$(document).ready(function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    $('#confirmButton').click(function () {
        let email = $('#inputEmail').val();
        let adress = $('#inputAddress').val();
        let city = $('#inputCity').val();
        let state = $('#inputState').val();;
        let postalCode = $('#inputPostal').val();

        if ($.trim(email) === "") {
            $('#inputEmail').addClass('notValid');
            event.preventDefault();
        } else {
            $('#inputEmail').removeClass('notValid');
        }

        if ($.trim(adress) === "") {
            $('#inputAddress').addClass('notValid');
            event.preventDefault();
        } else {
            $('#inputAddress').removeClass('notValid');
        }

        if ($.trim(city) === "") {
            $('#inputCity').addClass('notValid');
            event.preventDefault();
        } else {
            $('#inputCity').removeClass('notValid');
        }

        if (state === "Choose...") {
            $('#inputState').addClass('notValid');
            event.preventDefault();
        } else {
            $('#inputState').removeClass('notValid');
        }

        if ($.trim(postalCode) === "") {
            $('#inputPostal').addClass('notValid');
            event.preventDefault();
        } else {
            $('#inputPostal').removeClass('notValid');
        }
    });

    $('#danceButton').mousedown(function () {

        $(".myCardBlack").css("animation", "1.5s linear 0s infinite cardRotate");
        $(".myCardGrey").css("animation", "1.5s linear 0s infinite cardRotate");

    });

    $('#danceButton').mouseup(function () {

        $(".myCardBlack").css("animation", "");
        $(".myCardGrey").css("animation", "");

    });

    $('#lightButton').click(function () {

        if ($('.card').hasClass('bg-dark') || $('.card').hasClass('text-bg-dark')) {
            $('.card').removeClass('bg-dark').addClass('bg-light');
            $('.card').removeClass('text-bg-dark').addClass('text-bg-light');
        } else {
            $('.card').removeClass('bg-light').addClass('bg-dark');
            $('.card').removeClass('text-bg-light').addClass('text-bg-dark');
        }

        if ($('.tittle').hasClass('bg-dark') || $('.tittle').hasClass('text-bg-dark')) {
            $('.tittle').removeClass('bg-dark').addClass('bg-light');
            $('.tittle').removeClass('text-bg-dark').addClass('text-bg-light');
        } else {
            $('.tittle').removeClass('bg-light').addClass('bg-dark');
            $('.tittle').removeClass('text-bg-light').addClass('text-bg-dark');
        }

        if ($("#myFooter").hasClass("bg-dark")) {
            $("#myFooter").removeClass("bg-dark").addClass("bg-light");
            $("#myFooter").removeClass("text-bg-dark").addClass("text-bg-light");
        } else {
            $("#myFooter").removeClass("bg-light").addClass("bg-dark");
            $("#myFooter").removeClass("text-bg-light").addClass("text-bg-dark");
        }

        if ($('#myNavBar').attr('data-bs-theme') === 'dark') {
            $('#myNavBar').attr('data-bs-theme', 'light');
        } else {
            $('#myNavBar').attr('data-bs-theme', 'dark');
        }

        if ($(".mySidebar").hasClass("text-bg-dark")) {
            $(".mySidebar").removeClass("bg-dark").addClass("bg-light");
            $(".mySidebar").removeClass("text-bg-dark").addClass("text-bg-light");
        } else {
            $(".mySidebar").removeClass("bg-light").addClass("bg-dark");
            $(".mySidebar").removeClass("text-bg-light").addClass("text-bg-dark");
        }

        if ($(".sidelink").hasClass("text-bg-dark")) {
            $(".sidelink").removeClass("bg-dark").addClass("bg-light");
            $(".sidelink").removeClass("text-bg-dark").addClass("text-bg-light");
        } else {
            $(".sidelink").removeClass("bg-light").addClass("bg-dark");
            $(".sidelink").removeClass("text-bg-light").addClass("text-bg-dark");
        }

        if($('#cart').hasClass('bg-dark') || $('#cart').hasClass('text-bg-dark')){
            $('#cart').removeClass('bg-dark').addClass('bg-light');
            $('#cart').removeClass('text-bg-dark').addClass('text-bg-light');
        } else {
            $('#cart').removeClass('bg-light').addClass('bg-dark');
            $('#cart').removeClass('text-bg-light').addClass('text-bg-dark');
        }

        if($('#cartTable').hasClass('table-dark')){
            $('#cartTable').removeClass('table-dark');
        } else {
            $('#cartTable').addClass('table-dark');
        }
    });

    $('.card-footer button').on('click', function () {
        const card = $(this).closest('.card');
        const productName = card.find('.card-body .card-title').text();
        const productDescription = card.find('.card-body .card-text').text();
        const productCode = parseInt(card.find('.card-body h6').text());
        const productPriceString = card.find('.card-footer h4').text().replace('$', '').replace('.', '');
        const productPrice = parseFloat(productPriceString);
        let product =
        {
            code: productCode,
            name: productName,
            desc: productDescription,
            price: productPrice,
            quantity: 1
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let contains = false;
        cart.forEach(element => {
            if (element.code === productCode) {
                element.quantity++;
                contains = true;
            }
        });
        if (!contains) {
            cart.push(product);
        }
        $('#cartBodyOffCanvas').empty();
        cart.forEach(element => {
            var row = $("<tr><td><p>" + element.code
                + "</p></td><td>"
                + element.name + "</td><td>" + element.price * element.quantity
                + "</td><td>" + element.quantity
                + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");

            $('#cartBodyOffCanvas').append(row);
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    });

    $('#emptyCart').on('click', function () {
        localStorage.removeItem('cart');
        $('#cartBodyOffCanvas').empty();
    });
});

function remove() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productCode = parseInt($(event.target).closest('tr').find('td p').text());
    cart.forEach(element => {
        if (element.code === productCode) {
            element.quantity--;
        }
        if (element.quantity === 0) {
            cart.splice(cart.indexOf(element), 1);
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    $('#cartBodyOffCanvas').empty();
    cart.forEach(element => {
        var row = $("<tr><td><p>" + element.code
            + "</p></td><td>"
            + element.name + "</td><td>" + element.price * element.quantity
            + "</td><td>" + element.quantity
            + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");
        $('#cartBodyOffCanvas').append(row);
    });
}

function add() {   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productCode = parseInt($(event.target).closest('tr').find('td p').text());
    cart.forEach(element => {
        if (element.code === productCode) {
            element.quantity++;
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    $('#cartBodyOffCanvas').empty();
    cart.forEach(element => {
        var row = $("<tr><td><p>" + element.code
            + "</p></td><td>"
            + element.name + "</td><td>" + element.price * element.quantity
            + "</td><td>" + element.quantity
            + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");

        $('#cartBodyOffCanvas').append(row);
    });
}



// let cadenaString = JSON.stringify(array);
// localStorage.setItem("miPrimerStorage", cadenaString);

// let storage = localStorage.getItem("miPrimerStorage");
// let obj = JSON.parse(storage);

// let sku = parseInt(document.getElementById("sku").value);
// let nombre = document.getElementById("nombre").value;
// let precio = document.getElementById("precio").value;
// let obj = [sku, nombre, precio];

// let objs = JSON.parse(localStorage.getItem('miPrimerStorage')) || [];
// objs.push(obj);

// localStorage.setItem("miPrimerStorage", JSON.stringify(objs));


