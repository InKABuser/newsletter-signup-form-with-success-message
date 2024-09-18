document.addEventListener('DOMContentLoaded', function() {
    const BACK_BTN = document.getElementById('GOBACK');

    if (BACK_BTN) {
        BACK_BTN.addEventListener('click', function() {
            window.location.href = 'index.html'; // Navigate back to the previous page
        });
    } else {
        console.error("Element with ID 'GOBACK' not found.");
    }
});