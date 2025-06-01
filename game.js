const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CARD_WIDTH = 80;
const CARD_HEIGHT = 120;

let suits = ["♠", "♥", "♦", "♣"];
let deck = [];

// Generate and shuffle deck
function initDeck() {
  deck = [];
  for (let suit of suits) {
    for (let rank = 1; rank <= 13; rank++) {
      deck.push({ suit, rank, faceUp: false });
    }
  }
  deck = deck.sort(() => Math.random() - 0.5);
}

// Draw one card for testing
function drawCard(card, x, y) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(x, y, CARD_WIDTH, CARD_HEIGHT);
  ctx.strokeStyle = "#000";
  ctx.strokeRect(x, y, CARD_WIDTH, CARD_HEIGHT);
  ctx.fillStyle = (card.suit === "♥" || card.suit === "♦") ? "red" : "black";
  ctx.font = "16px Arial";
  ctx.fillText(getRankSymbol(card.rank) + card.suit, x + 8, y + 24);
}

function getRankSymbol(rank) {
  return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][rank - 1];
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 7; i++) {
    let card = deck[i];
    card.faceUp = true;
    drawCard(card, 30 + i * (CARD_WIDTH + 10), 100);
  }
}

initDeck();
draw();
