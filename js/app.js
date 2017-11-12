// Array that holds the cards
let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
console.log(cards); // For testing

let gameDeck = cards.slice();

let activeCards = [];

let matchedCards = [];

// Loop testing in test_code.js file

 // Runs when page Loads
 // Default difficultyLevel to medium
      // RUNGAME LOOP BUILD
function runGame() {
    shuffle(cards);
    dealCards(cards); // Takes in gameDeck array
    difficultyLevel(mediumDif);
    countStars();
    runLoop();
    //userInter();
};

function runLoop() {
    for (let i = 0; i < countStars(); i++) {  // Moves Check Loop End Result gameOver()
          console.log("TEST: starCount");
          for (let j = 0; j < gameDeck.length; j++) { // Cards remaning Loop End Result winnerWinner()
              console.log("TEST: Check winnerWinner");
              userInter();
          } // For winnerWinner
          winnerWinner(); // No cards remain in cards array.  All cards matched and were moved to matchedCards array
          console.log("TEST: winnerWinner"); // For testing
    } // For countStars
    gameOver(); // No moves remain and winning condition was not met.
    console.log("TEST: gameOver");  // For testing
    console.log();
};

function userInter() {
    const cardSpots = document.querySelectorAll("li");  // Grab all li elements
    for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
        cardSpots[k].addEventListener("click", function() {
        // Log "click" by user
            for (m = 2; m <= activeCards.length; m--) { // activeCards 0-2 cards Once full (2) then check match
                cardSpots[k].className = "card open show";  // Flip card to show card
                activeCards.push(cardSpots[k].firstChild); // Takes first child (the card) and places in activeCards
                gameDeck.pop(cardSpots[k].firstChild); // Removes the active card from the cards array
                console.log(activeCards);  // For testing
                console.log(activeCards.length); // For testing
}
            if (activeCards[0] === activeCards[1]) { //Check to see if cards match after selecting 2
                cardSpots[k].className = "card match"; // Hold cards open
                cardsMatch = activeCards.slice(); // Take the 2 cards in activeCards and place in matchedCards
                activeCards.splice();  // Clean out card in activeCards
                console.log(activeCards);  // For testing
                console.log(matchedCards.length); // For testing
            } else {
                cardSpots[k].className = "card"; // Flip card back to blank
                gameDeck.push(activeCards.slice()); // Take the 2 cards in activeCards and place in gameDeck
                activeCards.splice();  // Clean out card in activeCards
                console.log(activeCards);  // For testing
                console.log(activeCards.length); // For testing
                // Remove a star
            }
         //} // For cards in activeCards
         console.log("test");

        });
    }
};

 /*
 runGame() function parts
 */
 // Global variables
 let grabDeck = document.getElementsByClassName("deck"); // Grabs the deck ul
 let grabLi = document.querySelectorAll("li");
 // Place all cards in DOM
 // Idea: condense down to something like const listItem = document.createElement("li").setAttribute("class", "card");
function dealCards() {  // Grabs DOM element ul and creates li class "cards"
    for (let i = 0; i < cards.length; i++) {
        const cardSlots = document.createElement("li");
        cardSlots.setAttribute("class", "card");
        cardSlots.setAttribute("id", "cardIntAct"); // Added IDs to grab DOM to change classes
        const placeCard = document.createElement("i");
        placeCard.setAttribute("class", cards[i]);
        cardSlots.appendChild(placeCard);
        document.getElementById("buildDeck").append(cardSlots);
    }
};

 // Flip Card
 function flipCard () { // Removes current class and replaces with class "card open show"
     //grabDeck; // Might not need?
     //const takeLi = document.querySelectorAll("li");
    document.querySelectorAll("li")[0].className = "card open show"; // Will this replace class or add or bombout?
     // Place card to activeCards array from cards arrays
     // Remove card from cards array
     console.log("TEST: flipcard");
 };

 // Cards Match
 function cardsMatch() {  // Removes current class and replaces with class "card match"
     grabDeck;
     grabLi.className = "card match";
     // Place cards to matchedCards array
     // Remove from activeCards array
     // Add a move click to count # of clicks user made
 };

 // Cards Don't Match
 function dontMatch() {  //Removes current class and replaces with class "card"
     grabDeck;
     grabLi.className = "card";
     // Move cards from activeCards array back to cards array
     // Remove a star
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

/*
GAME components
*/
// Loads page and game components
function loadGame() {
    welcome(); // Launches Welcome Modal
    runGame(); // Launches runGame which houses game components
};

// Resets game components except username (can be updated by user)
function reset() {
    welcome();
    clearDeck();  // Clears gameDeck
    clearCardDecks();  //Clears gameDeck, activeCards and matchedCards
    runGame();
};

//
function clearDeck() {
    const clearCards = document.getElementById("buildDeck");  // Parent Node
        while (clearCards.firstChild) {
            clearCards.removeChild(clearCards.firstChild);  // Selects the first child in the Parent Node and removes it.
        }
};

// Clears buildDeck, activeCards and matchedCards
function clearCardDecks() {
    buildDeck.length = 0;
    activeCards.length = 0;
    matchedCards.length = 0;
};

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
};



// Stars & Moves.  Removes a star and updates # of stars Remaining
function countStars() {
    const starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
    const movesCount = document.getElementById("moves-count");
    movesCount.innerHTML = `${starCount}`; // Updates moves remaining
    return starCount;
};

// Removes all stars
function clearStars() {
    const starCount = document.getElementsByClassName("fa fa-star").length;
    const stars = document.getElementById("stars");
    while (stars.firstChild) {
            stars.removeChild(stars.firstChild);
    }
};
