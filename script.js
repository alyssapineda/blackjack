let firstCard = 10;
let secondCard = 11;
let cards = [firstCard,secondCard];

let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";

  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackjack = true;
  } else {
    message = "You lose!";
    hasBlackjack = false;
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing new card from the deck...");
  let nextCard = 5;
  sum += nextCard;
  cards.push(nextCard)
  console.log(cards)
  renderGame();
}




// let cards = [7,4]

// cards.push(6)
// //console.log(cards)
