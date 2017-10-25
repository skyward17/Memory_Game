// Modals for Welcome and GameOver PopUps
// Welcome Modal
const welcomeModal = document.getElementById("welcome_modal");

// Background color selector
let colorSelect = document.getElementById("colorPicker").value;

// When Window Loads displays Welcome Modal
function welcome() {
    window.open(welcomModal.style.display = "block");
};


// GameOver Modal
const GameOverModal = document.getElementById("gameOver_modal");

// When Window Loads displays Welcome Modal
function gameOver() {
    GameOverModal.style.display = "block";
};


// Shared Code for Modals

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
