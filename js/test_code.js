// When the user clicks on close text close the modal

// Stars & Moves.  Removes a star and updates # of stars Remaining
const star = document.getElementsByClassName("fa fa-star");
star.remove(); // removes a star class
const starCount = document.getElementsByClassName("fa fa-star").length; // Counts star elements
const movesCount = document.getElementsByClassName("moves");
movesCount.innerHTML = starCount; // Updates moves remaining
