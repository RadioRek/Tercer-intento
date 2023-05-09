
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

// adress form function
$(document).ready(function () {
    $('#confirmButton').click(function () {
        let email = $('#inputEmail').val();
        let adress = $('#inputAddress').val();
        let city = $('#inputCity').val();
        let state = $('#inputState').val();;
        let postalCode = $('#inputPostal').val();;

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

    })

    $('#danceButton').mouseup(function () {

        $(".myCardBlack").css("animation", "");
        $(".myCardGrey").css("animation", "");

    })

});

const newDivRow = document.createElement('div');
newDivRow.classList.add('row');
newDivRow.classList.add('justify-content-center');
newDivRow.classList.add('bg-dark');
newDivRow.classList.add('mx-0');
newDivRow.classList.add('py-3');

document.getElementById('userContainer').appendChild(newDivRow);


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => data.forEach(element => {

        const newDivCol = document.createElement('div');
        newDivCol.classList.add('col-auto');

        newDivRow.appendChild(newDivCol);

        const newDivCard = document.createElement('div');
        newDivCard.classList.add('card');
        newDivCard.classList.add('bg-secondary');
        newDivCard.classList.add('my-3');
        newDivCard.style.width = '18rem';

        newDivCol.appendChild(newDivCard);

        const newDivCardBody = document.createElement('div');
        newDivCardBody.classList.add('card-body');

        newDivCard.appendChild(newDivCardBody);

        const newH5 = document.createElement('h5');
        newH5.classList.add('card-title');
        newH5.classList.add('text-bg-secondary');
        newH5.innerHTML = element.name;

        newDivCardBody.appendChild(newH5);

        const newH6 = document.createElement('h6');
        newH6.classList.add('text-bg-secondary');
        newH6.innerHTML = element.email;

        newDivCardBody.appendChild(newH6);

        const newh6_2 = document.createElement('h6');
        newh6_2.classList.add('text-bg-secondary');
        newh6_2.innerHTML = element.phone;

        newDivCardBody.appendChild(newh6_2);
    }))
    .catch((error) => console.error(error));




