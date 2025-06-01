
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const CARD_WIDTH = 80;
const CARD_HEIGHT = 120;
const CARD_SPACING = 30;
const SUITS = ['♠', '♥', '♣', '♦'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  const deck = [];
  for (let suit of SUITS) {
    for (let rank of RANKS) {
      deck.push({ suit, rank });
    }
  }
  return deck;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function drawCard(x, y, card) {
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, CARD_WIDTH, CARD_HEIGHT);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, CARD_WIDTH, CARD_HEIGHT);
  ctx.fillStyle = card.suit === '♦' || card.suit === '♥' ? 'red' : 'black';
  ctx.font = "20px Arial";
  ctx.fillText(card.rank + card.suit, x + 10, y + 25);
}

function deal() {
  const deck = shuffle(createDeck());
  let offsetX = (canvas.width - (7 * (CARD_WIDTH + CARD_SPACING))) / 2;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j <= i; j++) {
      const card = deck.pop();
      drawCard(offsetX + i * (CARD_WIDTH + CARD_SPACING), 50 + j * 20, card);
    }
  }
}

deal();
