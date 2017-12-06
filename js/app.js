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

/////////////// V3 ///////////////
function gameLoop() {
// Functions and Variables
const cardSpots = document.querySelectorAll("li");
function cardState(state) { // Changes card states
    for (let card of activeCards) {
        if (state === "match") { card.className = "card match";}
        if (state === "NoMatch") { card.className = "card";}
    }
};
    for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
        cardSpots[k].addEventListener("click", function() {
        let starCounter = document.getElementsByClassName("fa fa-star").length;   // Get the number of stars remaining
            cardSpots[k].className = "card open show";  // Flip card to show card
            let playCard = cardSpots[k].firstChild.className; // takes card name 'i' from 'li' element
            activeCards.push(cardSpots[k]);
            gameDeck.pop(cardSpots[k]); // Removes the active card from the gameDeck array
            console.log(playCard);
            console.log(activeCards);
            console.log("activeCards");
            // userClicks
            if (activeCards.length === 2) {  // Check to see if there are two cards to compare in activeCards
                  console.log("activeCards[0]");
                  console.log(activeCards[0].firstChild.className);
                  if (activeCards[0].firstChild.className === activeCards[1].firstChild.className) { // Compare both cards in activeCards
                      cardState("match");
                      matchedCards.push(activeCards.slice());  // Take both cards in their open state and place into matched cards pile
                      activeCards.splice(0, 2);  // Clean out card in activeCards
                      console.log(activeCards.length); // For Testing
                      // className = cardsMatch
                      if (gameDeck.length = 0) {
                          // winnerWinner();
                          console.log("winnerWinner");  // For Testing
                      }
                  console.log(activeCards[0]);  // For testing
                  console.log("CardMatch");  // For testing
                  } else { // No Match
                      cardState("NoMatch");
                      //setTimeout(cardState("NoMatch"), 2000); // Stalls card flip during no match condition
                      gameDeck.push(activeCards.slice()); // Take the 2 cards in activeCards and place in cards
                      activeCards.splice(0, 2);  // Clean out card in activeCards
                      console.log("Cards do not Match"); // For Testing
                      console.log(activeCards.length); // For Testing
                      if (starCounter > 1) {  //If there are stars (moves) remaining do... When there are not gameOver
                          const stars = document.getElementById("stars"); // REMOVE STAR
                          stars.removeChild(stars.firstChild);
                          console.log(starCounter);

                      } else {
                          return gameOver();
                          console.log("gameOver");  // For Testing
                      }
                  } // No Match
            //} // activeCards
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
