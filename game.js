
const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function renderDeck(deck) {
  const container = document.getElementById("game-container");
  container.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= i; j++) {
      const card = deck.pop();
      const cardEl = document.createElement("div");
      cardEl.className = "card " + ((card.suit === '♥' || card.suit === '♦') ? "red" : "black");
      cardEl.textContent = card.value + card.suit;
      column.appendChild(cardEl);
    }
    container.appendChild(column);
  }
}

function startGame() {
  const deck = createDeck();
  shuffle(deck);
  renderDeck(deck);
}

startGame();
