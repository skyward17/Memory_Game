// When the user clicks on close text close the modal

// Stars & Moves.  Removes a star and updates # of stars Remaining
const star = document.getElementsByClassName("fa fa-star");
star.remove(); // removes a star class
const starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
const movesCount = document.getElementsByClassName("moves");
movesCount.innerHTML = starCount.value; // Updates moves remaining  value?



runGame() {
// function variables
    for(let i = 0; i < starCount; i++) {  // Moves Check Loop
        // Traverse DOM onclick
        // innerHTML card from shuffle array
        // move card from shuffle Array to activeCard Array
        while (ActiveCard.length <= 1) {  // User Click Loops while one - two cards active
            if (activeCard[0] === activeCard[1]) {
                // removes cards from shuffle and activeCard arrays
                // Loop ends as Active card length empty
                if (shuffle.length > 0) {
                    winnerWinner(); // runs winner condition function for end game
                } else {
                    // return to User Click Loop
                }
            } else {
                // Flip Card back by removing innerHTML
                // Remove cards from activeCard and place back into shuffle array
                // remove star
            } // if activeCard Match



      } //User Click Loop
    } // Moves Check Loop
    gameOver(); // Once starCount is exhaused runs gameOver fucntion
};
