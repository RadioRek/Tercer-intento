
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