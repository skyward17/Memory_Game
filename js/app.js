//  Main code framework for game components, functions and executions //

// Arrays for the cards
let cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

let gameDeck = cards.slice();  //  Working deck.  Cards in play between the active pile and matched cards pile.

let activeCards = [];  //  Cards that are actively selected in play by the user.

let matchedCards = [];  //  Cards that have been matched and are taken out of play

// Global variables
let userClicks = 0;

// Runs when page Loads
function runGame() {
    shuffle(cards);
    dealCards(cards); // Takes in gameDeck array
    difficultyLevel(mediumDif);   // Default difficultyLevel to medium
    gameLoop();
};

// Game Loop User Interaction
function gameLoop() {
// Functions and Variables
    const cardSpots = document.querySelectorAll("li");

    function cardState(state) { // Changes card states
        for (let card of activeCards) {
            if (state === "match") { card.className = "card match";}  // Locks in cards
            if (state === "NoMatch") {setTimeout(function(){ card.className = "card" }, 1200);} // Change card state back to card using delay in execution
            if (state === "disable") {setInterval(function(){ card.className = "disable" }, 10000);}
         }
     };
    for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
        cardSpots[k].addEventListener("click", function() {
        let starCounter = document.getElementsByClassName("fa fa-star").length;   // Get the number of stars remaining
            cardSpots[k].className = "card open show";  // Flip card to show card
            countClicks();  // Counts clicks on each li element
            let playCard = cardSpots[k].firstChild.className; // takes card name 'i' from 'li' element
            activeCards.push(cardSpots[k]);
            gameDeck.pop(cardSpots[k]); // Removes the active card from the gameDeck array
            if (activeCards.length === 2) {  // Check to see if there are two cards to compare in activeCards
                  if (activeCards[0].firstChild.className === activeCards[1].firstChild.className) { // Compare both cards in activeCards
                      cardState("match");
                      matchedCards.push(activeCards.slice());  // Take both cards in their open state and place into matched cards pile
                      activeCards.splice(0, 2);  // Clean out card in activeCards
                  } else { // No Match
                      cardState("NoMatch"); // Change card state back to card using delay in execution
                      gameDeck.push(activeCards.slice()); // Take the 2 cards in activeCards and place in cards
                      activeCards.splice(0, 2);  // Clean out card in activeCards
                      cardState("disable");
                      if (starCounter > 1) {  //If there are stars (moves) remaining do... When there are not gameOver
                          const stars = document.getElementById("stars"); // REMOVE STAR
                          stars.removeChild(stars.firstChild);
                      } else {
                          stars.removeChild(stars.firstChild);
                          stopTimer(); // Stop Timer
                          return gameOver();
                      }
                  } // No Match
                  if (matchedCards.length === 8) {  //  If no cards remain in gameDeck meaning all cards are matched
                      stopTimer(); // Stop Timer
                      return gameOver();
                  }  //  if gameDeck.length <=1
        } // starCounter
    });  // user interaction
  }  // Loop
};  // gameLoop()


// GAME components runGame() function parts //

 // Global variables
let grabDeck = document.getElementsByClassName("deck"); // Grabs the deck ul
let grabLi = document.querySelectorAll("li");
// Place all cards in DOM
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

// Loads page and game components
function loadGame() {
    welcome(); // Launches Welcome Modal
    runGame(); // Launches runGame which houses game components
};

// Resets game components except username (can be updated by user)
function reset() {
    welcome();
    clearDeck();  // Clears gameDeck
    clearCardDecks();  // Clears gameDeck, activeCards and matchedCards
    runGame();
    resetTimer();
    clearClicks();
};

// Resets game and closes modal
function restart() {
    reset();
    gameOverModal.style.display = "none";
};

// Clears the Deck
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

// User Clicks
function countClicks() {
    userClicks += 1;
    const clicksCount = document.getElementById("click-count");  // Grab click-count
    clicksCount.innerHTML = `Clicks: ${userClicks}`; // Updates clicks made by user
};

// clear Clicks
function clearClicks() {
    userClicks = 0;
    const clicksCount = document.getElementById("click-count");  // Grab click-count
    clicksCount.innerHTML = `Clicks: ${userClicks}`; // Updates clicks made by user
};

// Removes all stars
function clearStars() {
    let starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
    const stars = document.getElementById("stars");
    while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
    }
};
