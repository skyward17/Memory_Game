

// Runs when page Loads
// Default difficultyLevel to medium
function runGame() {
      shuffle(cards);
      dealCards(cards); // Takes in cards array
      difficultyLevel(mediumDif);
      starCount();
// function variables
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
