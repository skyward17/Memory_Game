// Modals for Welcome and GameOver PopUps

// Get the <span> element that closes the modal
//const span = document.getElementsByClassName("close")[0];


// Welcome Modal
const welcomeModal = document.getElementById("welcome_modal");
// function to change background-color

// When Window Loads displays Welcome Modal
function welcome() {
    window.open(welcomeModal.style.display = "block");
};

// When the user clicks on close text close the modal
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    welcomeModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == welcomeModal) {
        welcomeModal.style.display = "none";
    }
};



// GameOver Modal
const gameOverModal = document.getElementById("gameOver_modal");

// When Window Loads displays Welcome Modal
function gameOver() {
    gameOverModal.style.display = "block";
};

// When the user clicks on close text close the modal
function close() {
    const span = document.getElementsByClassName("close")[0];
    gameOverModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == gameOverModal) {
        gameOverModal.style.display = "none";
    }
};
