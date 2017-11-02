// Modals for Welcome and GameOver PopUps

// Welcome Modal
const welcomeModal = document.getElementById("welcome_modal");

// When Window Loads displays Welcome Modal
function welcome() {
    welcomeModal.style.display = "block";
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

// Player Name array
let plrEntrName = document.getElementById("playerName");
// Players name entered from Welcome Modal
function playersName() {
    const playerNameStore = [plrEntrName.value];
    console.log(playerNameStore); // For testing
    // Add players name to game
    const displayName = document.getElementById("playersNameHere");
    displayName.innerHTML = `Player: ${playerNameStore}`;
};


// Difficulty Selects (Easy, Medium, Hard)
let easyDif = 6;
let mediumDif = 4;
let hardDif = 2;
function difficultyLevel(level) {
    clearStars();
    for (let i = 0; i < level; i++) {
        const stars = document.getElementById("stars"); // Grab Stars ID
        const listItem = document.createElement("li"); // Create a li
        stars.appendChild(listItem); // Add li to stars ID
        listItem.setAttribute("class", "fa fa-star"); // Add Class "fa fa-star" to each li
    }
    starCount();
};


// GameOver() Modal
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


// winnerWinner() Modal
function winnerWinner() {
const displayName = document.getElementById("playersNameHere");
displayName.innerHTML = `Congradulations! ${playerNameStore}`;

};


// Play Again?  Same as reset()

// Stars & Moves.  Removes a star and updates # of stars Remaining
function starCount() {
    const starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
    const movesCount = document.getElementById("moves-count");
    movesCount.innerHTML = `${starCount}`; // Updates moves remaining
};

// Removes all stars
function clearStars() {
    const starCount = document.getElementsByClassName("fa fa-star").length;
    const stars = document.getElementById("stars");
    while (stars.firstChild) {
            stars.removeChild(stars.firstChild);
    }
};
