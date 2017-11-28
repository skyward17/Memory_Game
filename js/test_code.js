

// Runs when page Loads
// Default difficultyLevel to medium
function runGame() {
      shuffle(cards);
      dealCards(cards); // Takes in cards array
      difficultyLevel(mediumDif);
      starCount();
// function variables
    for (let i = 0; i < starCount; i++) {  // Moves Check Loop
        const cardSlots = document.querySelectorAll("li"); // Select all li elements to traverse
        for (let j = 0; j < cardSlots.length; j++) {
            cardSlots[j].addEventListener("click", function() {
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
        */});   // Loop for traversing DOM cardSlots
       } //User Click Loop
    } // Moves Check Loop
    gameOver(); // Once starCount is exhaused runs gameOver fucntion
};



/*
runGame() function parts
*/
// Global variables
//let grabDeck = document.getElementsByClassName("deck"); // Grabs the deck ul
let grabLi = document.getElementsByTagName("li");
let removeAttr = document.getElementsByTagName("li")[0].removeAttribute("class");
// Place all cards in DOM
// Idea: condense down to something like const listItem = document.createElement("li").setAttribute("class", "card");
function dealCards(playcards) {  // Grabs DOM element ul and creates li class "cards"
    for (const card in playcards) { // While there are cards in the cards array for in loop
        grabLi;//document.getElementsByTagName("li"); // Grabs newly created li
        const placeCard = document.createElement("i"); // Creates an i element
        placeCard.setAttribute("class", playcards[0]); // Places a card from the cards array
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

// NEW
let checkMoves = document.getElementsByClassName("fa fa-star").length;
for (let i = 0; i < checkMoves; i++) {  // Moves Check Loop End Result gameOver()
      console.log("TEST: checkMoves");
      console.log(countStars);
      for (let j = 0; j < gameDeck.length; j++) { // Cards remaning Loop End Result winnerWinner()
          console.log("TEST: Check winnerWinner");



                                }
                             //} // For cards in activeCards
                             console.log("test");

                            });
                          }
                       }// For winnerWinner
                       //winnerWinner(); // No cards remain in cards array.  All cards matched and were moved to matchedCards array
                       console.log("TEST: winnerWinner"); // For testing
                    } // For countStars
                    //gameOver(); // No moves remain and winning condition was not met.
                    console.log("TEST: gameOver");  // For testing
                    console.log();







// Exsisting
function runLoop() {
    for (let i = 0; i < countStars(); i++) {  // Moves Check Loop End Result gameOver()
          console.log("TEST: starCount");
          for (let j = 0; j < gameDeck.length; j++) { // Cards remaning Loop End Result winnerWinner()

              console.log("TEST: Check winnerWinner");
              userInter();
          } // For winnerWinner
          //winnerWinner(); // No cards remain in cards array.  All cards matched and were moved to matchedCards array
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

// SAVE //
<ul class="deck">
    <li class="card">
        <i class="fa fa-diamond"></i>
    </li>
    <li class="card">
        <i class="fa fa-paper-plane-o"></i>
    </li>
    <li class="card match">
        <i class="fa fa-anchor"></i>
    </li>
    <li class="card">
        <i class="fa fa-bolt"></i>
    </li>
    <li class="card">
        <i class="fa fa-cube"></i>
    </li>
    <li class="card match">
        <i class="fa fa-anchor"></i>
    </li>
    <li class="card">
        <i class="fa fa-leaf"></i>
    </li>
    <li class="card">
        <i class="fa fa-bicycle"></i>
    </li>
    <li class="card">
        <i class="fa fa-diamond"></i>
    </li>
    <li class="card">
        <i class="fa fa-bomb"></i>
    </li>
    <li class="card">
        <i class="fa fa-leaf"></i>
    </li>
    <li class="card">
        <i class="fa fa-bomb"></i>
    </li>
    <li class="card open show">
        <i class="fa fa-bolt"></i>
    </li>
    <li class="card">
        <i class="fa fa-bicycle"></i>
    </li>
    <li class="card">
        <i class="fa fa-paper-plane-o"></i>
    </li>
    <li class="card">
        <i class="fa fa-cube"></i>
    </li>
</ul>
</div>






function gameLoop() {
    for (let a = 0; a > countStars; a++) {  //If there are stars (moves) remaining do... When there are not gameOver
        for (let b = 0; b < cards.length; b++) {  //If there are cards in the cards array do... When not winnerWinner
            if (activeCards.length < 1) {  // If there are 0 up to 1 card in the activeCards pile do..
                const cardSpots = document.querySelectorAll("li");  // Grab all li elements
                for (let k = 0; k < cardSpots.length; k++) { // Loop through li DOM
                        cardSpots[k].addEventListener("click", function() {
                        cardSpots[k].className = "card open show";  // Flip card to show card
                        activeCards.push(cardSpots[k].firstChild.className); // Takes first child (the card) and places in activeCards
                        gameDeck.pop(cardSpots[k].firstChild.className); // Removes the active card from the cards array
} //After click loop and adding card to activeCards and removing from gameDeck pile check conditions
                        if (activeCards[0] === activeCards[1]) {
                            matchedCards.push(activeCards.slice());
                            console.log(cardSpots[k].firstChild.className);  //
                            console.log("true");
                        } else {
                           console.log("false");
                           //cardSpots[k].className = "card"; // Flip card back to blank
                           gameDeck.push(activeCards.slice()); // Take the 2 cards in activeCards and place in gameDeck
                           activeCards.splice();  // Clean out card in activeCards
                           console.log(activeCards);  // For testing
                           console.log(activeCards.length); // For testing
                           // Remove a star
}
}
}

}
// winnerWinner();
}
// gameOver();
}; //END gameLoop()
