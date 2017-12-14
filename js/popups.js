// Modals for Welcome and GameOver PopUps

// Welcome Modal: When Window Loads displays Welcome Modal//
const welcomeModal = document.getElementById("welcome_modal");
function welcome() {
    welcomeModal.style.display = "block";
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
    //countStars();
};


// GameOver() Modal  When user no longer has moves
const gameOverModal = document.getElementById("gameOver_modal");
function gameOver() {
    gameOverModal.style.display = "block";
    const displayName = document.getElementById("playersNameHere");
    //displayName.innerHTML = `Congratulations! ${playerNameStore}`;
};

// When the user clicks on close text, close the modal
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
      if (welcomeModal) {welcomeModal.style.display = "none";}
      if (gameOverModal) {gameOverModal.style.display = "none";}
      //if (winnerWinner) {winnerWinnerModal.style.display = "none";}
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === welcomeModal) {welcomeModal.style.display = "none";}
    if (event.target === gameOverModal) {gameOverModal.style.display = "none";}
    if (event.target === winnerWinner) {winnerWinnerModal.style.display = "none";}
};

// winnerWinner() Modal
const winnerWinnerModal = document.getElementById("winnerWinner_modal");
function winnerWinner() {
    const displayName = document.getElementById("playersNameHere");
    displayName.innerHTML = `Congradulations! ${playerNameStore}`;
};
