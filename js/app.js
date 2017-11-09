

// Array that holds the cards
let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
console.log(shuffle(cards)); // For testing


// Loop testing in test_code.js file
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


 // Runs when page Loads
 // Default difficultyLevel to medium
function runGame() {
      shuffle(cards);
      difficultyLevel(mediumDif);
      starCount();
      dealCards();
/*
     for(let i = 0; i < starCount; i++) {  // Moves Check Loop
         const cardSlots = document.querySelectorAll("li"); // Select all li elements to traverse
         for (let i = 0; i < cardSlots.length; i++) {
             cardSlots[i].addEventListener("click", function() {
             //do something with the click ...
             flipCard(); // should show the card and remove it from the cards array
             /* // As long as one card is active player can select another.
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


         } // Loop for traversing DOM cardSlots
         });   // Loop for traversing DOM cardSlots
        } //User Click Loop
     } // Moves Check Loop
     //gameOver(); // Once starCount is exhaused runs gameOver fucntion
*/
 };


 /*
 runGame() function parts
 */
 // Global variables
 grabDeck = document.getElementsByClassName("deck"); // Grabs the deck ul
 //let grabLi = document.getElementsByTagName("li");
 let removeAttr = document.getElementsByTagName("li")[0].removeAttribute("class");
 // Place all cards in DOM
 // Idea: condense down to something like const listItem = document.createElement("li").setAttribute("class", "card");
function dealCards() {  // Grabs DOM element ul and creates li class "cards"
    for (let i = 0; i < cards.length; i++) {
        const cardSlots = document.createElement("li");
        cardSlots.setAttribute("class", "card");
        const placeCard = document.createElement("i");
        placeCard.setAttribute("class", cards[i]);
        cardSlots.appendChild(placeCard);
        document.getElementById("buildDeck").append(cardSlots);
    }
};

 // Flip Card
 function flipCard () { // Removes current class and replaces with class "card open show"
     grabDeck; // Might not need?
     removeAttr;
     grabLi.setAttribute("class", "card open show"); // Will this replace class or add or bombout?

 };

 // Cards Match
 function cardsMatch() {  // Removes current class and replaces with class "card match"
     grabDeck;
     removeAttr;
     grabLi.setAttribute("class", "card match");
 };

 // Cards Don't Match
 function dontMatch() {  //Removes current class and replaces with class "card"
     grabDeck;
     removeAttr;
     grabLi.setAttribute("class", "card");
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
    clearDeck();
    runGame();
};

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
};

// Removes all stars
function clearStars() {
    const starCount = document.getElementsByClassName("fa fa-star").length;
    const stars = document.getElementById("stars");
    while (stars.firstChild) {
            stars.removeChild(stars.firstChild);
    }
};
