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

// light/dark mode
$(document).ready(function () {
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

        if ($('#cart').hasClass('bg-dark') || $('#cart').hasClass('text-bg-dark')) {
            $('#cart').removeClass('bg-dark').addClass('bg-light');
            $('#cart').removeClass('text-bg-dark').addClass('text-bg-light');
        } else {
            $('#cart').removeClass('bg-light').addClass('bg-dark');
            $('#cart').removeClass('text-bg-light').addClass('text-bg-dark');
        }

        if ($('#cartTable').hasClass('table-dark')) {
            $('#cartTable').removeClass('table-dark');
        } else {
            $('#cartTable').addClass('table-dark');
        }
    });
});

// off canas function
signUpError = document.getElementById('signUpError').value;
success = document.getElementById('success').value;

if (signUpError == 'userExists') {
    let button = document.getElementById('signUpButton');
    button.click();
}

if (signUpError == 'passwordsDontMatch') {
    let button = document.getElementById('signUpButton');
    button.click();
}

if (success == 'user created successfully!') {
    let button = document.getElementById('logInButton');
    button.click();
    thing = document.getElementById('userCreated');
    thing.removeAttribute('hidden');
}

if (success == 'user logged in successfully!') {
    alert('user logged in successfully!');
}