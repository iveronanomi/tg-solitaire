const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  const deck = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push({ value, suit, faceUp: false });
    }
  }
  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

let deck = shuffle(createDeck());
let waste = [];
let stockPile = document.getElementById("stock-pile");
let wastePile = document.getElementById("waste-pile");
let tableau = document.getElementById("tableau");

stockPile.addEventListener("click", () => {
  if (deck.length === 0) {
    deck = waste.reverse();
    waste = [];
    updateWaste();
  } else {
    for (let i = 0; i < 3 && deck.length > 0; i++) {
      waste.push(deck.pop());
    }
    updateWaste();
  }
});

function updateWaste() {
  if (waste.length === 0) {
    wastePile.textContent = "";
    wastePile.classList.remove("back");
  } else {
    const top = waste[waste.length - 1];
    wastePile.textContent = top.value + top.suit;
    wastePile.style.color = (top.suit === '♦' || top.suit === '♥') ? "red" : "black";
  }
}

function dealTableau() {
  for (let i = 0; i < 7; i++) {
    const col = document.createElement("div");
    col.className = "tableau-column";
    for (let j = 0; j <= i; j++) {
      const card = deck.pop();
      card.faceUp = (j === i);
      const el = document.createElement("div");
      el.className = "card";
      if (card.faceUp) {
        el.textContent = card.value + card.suit;
        el.style.color = (card.suit === '♦' || card.suit === '♥') ? "red" : "black";
      } else {
        el.classList.add("back");
      }
      col.appendChild(el);
    }
    tableau.appendChild(col);
  }
}

dealTableau();