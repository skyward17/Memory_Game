//Arrays for the cards

let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

let gameDeck = cards.slice();

let activeCards = [];

let matchedCards = [];

 // Runs when page Loads
 // Default difficultyLevel to medium
      // RUNGAME LOOP BUILD
function runGame() {
    shuffle(cards);
    dealCards(cards); // Takes in gameDeck array
    difficultyLevel(mediumDif);
    countStars();
    gameLoop();
};

// V2
function gameLoop() {
///////////////////////////////
const cardSpots = document.querySelectorAll("li");

    for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
    cardSpots[k].addEventListener("click", function() {
    let starCounter = document.getElementsByClassName("fa fa-star").length;   // Get the number of stars remaining
    console.log(starCounter); // For tesing
    console.log(gameDeck);
    if (starCounter = 0) {  //If there are stars (moves) remaining do... When there are not gameOver
        // gameOver();
        console.log("gameOver");  // For Testing
        console.log(starCounter);  // For testing
    } else {  // Keep going
        if (gameDeck.length = 0) {
            // winnerWinner();
            console.log(gameDeck.length);
            console.log("winnerWinner");  // For Testing
        } else {  // Keep going
            cardSpots[k].className = "card open show";  // Flip card to show card
            activeCards.push(cardSpots[k].firstChild.className); // Takes first child (the card) and places in activeCards
            gameDeck.pop(cardSpots[k].firstChild.className); // Removes the active card from the cards array
            console.log(activeCards);
            // userClicks
            if (activeCards.length === 2) {  // Check to see if there are two cards to compare in activeCards
                  let activeCard_1 = activeCards[0];  //
                  let activeCard_2 = activeCards[1];
                  console.log("activeCard_1");
                  console.log(activeCard_1);
                  if (activeCard_1 === activeCard_2) { // Compare both cards in activeCards
                  matchedCards.push(activeCards.slice());  // Take both cards in their open state and place into matched cards pile
                  activeCards.splice();  // Clean out card in activeCards
                  console.log(activeCard_1);  // For testing
                  console.log("CardMatch");  // For testing
                  } else { // No Match
                      activeCards.className = "card";  // Flips cards back over ***was cardSpots[k]
                      gameDeck.push(activeCards.slice()); // Take the 2 cards in activeCards and place in cards
                      activeCards.splice();  // Clean out card in activeCards
                      // REMOVE STAR
                  } // No Match
            //} // activeCards

            }  // gameOver
          }  // winnerWinner
        } // starCounter
    });  // user interaction
  } // Loop
};

// Tracks the total number of clicks as well as how many are made for a match set
function userClicks() {
  let userClicks = gameUserFuncs.clicks; //
  const clicks = document.getElementById("user-clicks");
  clicks.innerHTML = `${userClicks}`; // Updates moves remaining
  return gameUserFuncs.clicks += 1;
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
    gameDeck.length = 0;
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
    let starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
    const movesCount = document.getElementById("moves-count");
    movesCount.innerHTML = `${starCount}`; // Updates moves remaining
    return starCount;
};

// Removes all stars
function clearStars() {
    let starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
    const stars = document.getElementById("stars");
    while (stars.firstChild) {
            stars.removeChild(stars.firstChild);
    }
};
