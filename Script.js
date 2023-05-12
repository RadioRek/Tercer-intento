
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
    });

    
});




