$('#danceButton').mousedown(function () {
    $(".myCardBlack").css("animation", "1.5s linear 0s infinite cardRotate");
    $(".myCardGrey").css("animation", "1.5s linear 0s infinite cardRotate");
});

$('#danceButton').mouseup(function () {
    $(".myCardBlack").css("animation", "");
    $(".myCardGrey").css("animation", "");
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
        var row = $("<tr><td>" + element.code
            + "</td><td>"
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

