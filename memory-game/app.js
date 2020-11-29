document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "fries", img: "images/fries.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "milkshake", img: "images/milkshake.png" },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var cardChosen = [];
  var cardChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkMatch() {
    var cards = document.querySelectorAll("img");
    const OptionOneId = cardChosenId[0];
    const OptionTwoId = cardChosenId[1];
    if (cardChosen[0] === cardChosen[1]) {
      alert("You found a match");
      cards[OptionOneId].setAttribute("src", "images/white.png");
      cards[OptionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardChosen);
    } else {
      cards[OptionOneId].setAttribute("src", "images/blank.png");
      cards[OptionTwoId].setAttribute("src", "images/blank.png");
      alert("Try again");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Grat";
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
