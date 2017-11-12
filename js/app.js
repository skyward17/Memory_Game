// Array that holds the cards
let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
console.log(shuffle(cards)); // For testing

let activeCards = [];
console.log(activeCards); // For testing

let matchedCards = [];

// Loop testing in test_code.js file

 // Runs when page Loads
 // Default difficultyLevel to medium
      // RUNGAME LOOP BUILD
function runGame() {
    shuffle(cards);
    dealCards(cards); // Takes in cards array
    difficultyLevel(mediumDif);
    starCount();
    userInter();
};

function userInter() {
    const cardSpots = document.querySelectorAll("li");  // Grab all li elements
    for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
        cardSpots[k].addEventListener("click", function() {
        let getDeck = document.getElementById("cardIntAct");
        cardSpots[k].className = "card open show";
        console.log("TEST 1 2 3");
        });

    }
};

/*
function userInter() {
    let countStars = starCount();
    console.log(countStars);
    console.log("TEST: Play Loops");
    for (let i = 0; i < countStars; i++) {  // Moves Check Loop End Result gameOver()
          console.log("TEST: starCount");
          for (let j = 0; j < cards.length; j++) { // Cards remaning Loop End Result winnerWinner()
              console.log("TEST: Check winnerWinner");
              const cardSpots = document.querySelectorAll("li");  // Grab all li elements
              for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
              cardSpots[k].addEventListener("click", function() {
              removeAttr;
              cardSpots[0].setAttribute("class", "card open show");
              // Conditional Loops for user interaction with cards
                  //for (let l = 2; l > activeCards.length; l++) { // ActiveCards arrays loop if cards are in play
                  flipCard();
                  //if (activeCards[0] === activeCards[1] || ) { //

                  }); //
         // If activeCards array is equal to or less than 1
         // Turn over card and add card to activeCards array
         //


       } // activeCards Loop
            //});
        }
      } //
      //    winnerWinner(); // No cards remain in cards array.  All cards matched and were moved to matchedCards array
      //        }
      //        gameOver(); // No moves remain and winning condition was not met.
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
    clearDeck();  // Clears buildDeck
    runGame();
};

//
function clearDeck() {
    const clearCards = document.getElementById("buildDeck");  // Parent Node
        while (clearCards.firstChild) {
            clearCards.removeChild(clearCards.firstChild);  // Selects the first child in the Parent Node and removes it.
        }
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
function starCount() {
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
