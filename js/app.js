// Loads page and game components
function loadGame() {
    welcome(); // Launches Welcome Modal
    runGame(); // Launches runGame which houses game components
};

// Resets game components
function reset() {
    welcome();
    difficultyLevel(mediumDif); // Default
    starCount();
    shuffle(cards);
};


// Array that holds the cards
let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
//let cardPile = cards.copyWithin(); // Might just be easier to loop 2 cards in the onclick process
console.log(shuffle(cards)); // For testing


// Loop testing in test_code.js file
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// runGame() handles user interactions with the game
// Runs when page Loads
function runGame() {
      shuffle(cards);
      difficultyLevel(mediumDif); // Default difficultyLevel to medium
// function variables
    for(let i = 0; i < starCount; i++) {  // Moves Check Loop
        // Traverse DOM onclick
        // innerHTML card from shuffle array
        // move card from shuffle Array to activeCard Array
        while (ActiveCard.length <= 1) {  // User Click Loops while one - two cards active
            if (activeCard[0] === activeCard[1]) {
                // removes cards from shuffle and activeCard arrays
                // Loop ends as Active card length empty
                if (cards.length > 0) {
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
    //gameOver(); // Once starCount is exhaused runs gameOver fucntion
};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
