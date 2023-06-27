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

let cart = JSON.parse(localStorage.getItem('cart')) || [];

$('#cardBody').empty();
cart.forEach(element => {
    var row = $("<tr><td><p>" + element.code
        + "</p></td><td>"
        + element.name + "</td><td>" + element.price * element.quantity
        + "</td><td>" + element.quantity
        + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");
    $('#cardBody').append(row);
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
    $('#cardBody').empty();
    cart.forEach(element => {
        var row = $("<tr><td><p>" + element.code
            + "</p></td><td>"
            + element.name + "</td><td>" + element.price * element.quantity
            + "</td><td>" + element.quantity
            + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");
        $('#cardBody').append(row);
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
    $('#cardBody').empty();
    cart.forEach(element => {
        var row = $("<tr><td><p>" + element.code
            + "</p></td><td>"
            + element.name + "</td><td>" + element.price * element.quantity
            + "</td><td>" + element.quantity
            + "</td><td><button class='btn btn-sm btn-danger' type='button' onClick='remove()'>Remove</button></td><td><button class='btn btn-sm btn-success' type='button' onClick='add()'>Add</button></td></tr>");
        $('#cardBody').append(row);
    });
}

