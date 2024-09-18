const MAIN_IMAGE = document.getElementsByClassName('main-img')[0];
const INPUT = document.getElementById('email');
const BTN = document.getElementById('button');
const MAIN_FORM = document.getElementsByClassName('form')[0];
const emailHint = document.getElementsByClassName('validE')[0];


INPUT.addEventListener('input', function() {
    inputCheckRealTime();
})

function inputCheckRealTime(){
    let inputValue = INPUT.value.trim();  // Get the trimmed input value

    // Check if the email format is valid
    if (!isValidEmail(inputValue)) {
        INPUT.classList.add("error");  // Add error styling
        emailHint.style.display = 'block';  // Show the error message
    } else {
        INPUT.classList.remove("error");  // Remove error styling
        emailHint.style.display = 'none';  // Hide the error message
    }
}


MAIN_FORM.onsubmit = function(e) {
    inputCheck();
    let isFormValid = inputCheck();
    if (!isFormValid) {
        e.preventDefault();
    } else {
        e.preventDefault();
        window.location.href = "message.html";
    }
}

function inputCheck () {
    let inputValue = INPUT.value.trim();

    let formValidity = true;
    if(inputValue === "") {
        INPUT.classList.add("error")
        emailHint.style.display = "block";
        formValidity = false;
    } else {
        INPUT.classList.remove("error");
        emailHint.style.display = "none";
    }
    if (!isValidEmail(inputValue)) {
        formValidity = false;
        INPUT.classList.add('error');
        emailHint.style.display = "block";
    } else {
        INPUT.classList.remove('error');
        emailHint.style.display = "none";
    }



    return formValidity;
}


function isValidEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



const mediaQuery = window.matchMedia('(min-width: 720px)');


function checkScreenSize(e) {
    if (e.matches) {
        MAIN_IMAGE.src = "assets/images/illustration-sign-up-desktop.svg"
    } else {
        MAIN_IMAGE.src = "assets/images/illustration-sign-up-mobile.svg"
    }
}

checkScreenSize(mediaQuery);
mediaQuery.addEventListener("change", checkScreenSize);