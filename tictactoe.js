const playerButton = document.querySelector('.player-button');
const player1Name = document.querySelector('.player1-name');
const player2Name = document.querySelector('.player2-name');

playerButton.addEventListener('click', function(e) {
  e.preventDefault();
  location.reload();
  player1.playerName = player1Name.value;
  player2.playerName = player2Name.value;
})

const player = (playerName) => {

  return {
    playerName: playerName
  };
};
const player1 = player(player1Name.value)
const player2 = player(player2Name.value)



const gameBoardObject = (() => {
  let gameBoard = [];
  return {
    gameBoard: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
  };
})();



const gameController = (() => {

  let gameBoard = gameBoardObject.gameBoard;

  return {
    winCondition: function () {
      if (
        gameBoard[0] === "x" &&
        gameBoard[1] === "x" &&
        gameBoard[2] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[3] === "x" &&
        gameBoard[4] === "x" &&
        gameBoard[5] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[6] === "x" &&
        gameBoard[7] === "x" &&
        gameBoard[8] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[0] === "x" &&
        gameBoard[4] === "x" &&
        gameBoard[8] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[2] === "x" &&
        gameBoard[4] === "x" &&
        gameBoard[6] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[0] === "x" &&
        gameBoard[3] === "x" &&
        gameBoard[6] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[1] === "x" &&
        gameBoard[4] === "x" &&
        gameBoard[7] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      } else if (
        gameBoard[2] === "x" &&
        gameBoard[5] === "x" &&
        gameBoard[8] === "x"
      ) {
        return alert(`${player1.playerName} wins`);
      }
      if (
        gameBoard[0] === "o" &&
        gameBoard[1] === "o" &&
        gameBoard[2] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[3] === "o" &&
        gameBoard[4] === "o" &&
        gameBoard[5] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[6] === "o" &&
        gameBoard[7] === "o" &&
        gameBoard[8] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[0] === "o" &&
        gameBoard[4] === "o" &&
        gameBoard[8] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[2] === "o" &&
        gameBoard[4] === "o" &&
        gameBoard[6] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[0] === "o" &&
        gameBoard[3] === "o" &&
        gameBoard[6] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[1] === "o" &&
        gameBoard[4] === "o" &&
        gameBoard[7] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      } else if (
        gameBoard[2] === "o" &&
        gameBoard[5] === "o" &&
        gameBoard[8] === "o"
      ) {
        return alert(`${player2.playerName} wins`);
      }
    },
    drawCondition: function () {
      let asdf = gameBoardObject.gameBoard.every((element) => element === "x" || element === "o");
      if(asdf === true) {
        alert('draw');
      }
    },
  };
})();



const displayController = (() => {
  const gameContainer = document.querySelector(".game-container");
  const square1 = document.querySelector("[data-index='1']");
  const square2 = document.querySelector("[data-index='2']");
  const square3 = document.querySelector("[data-index='3']");
  const square4 = document.querySelector("[data-index='4']");
  const square5 = document.querySelector("[data-index='5']");
  const square6 = document.querySelector("[data-index='6']");
  const square7 = document.querySelector("[data-index='7']");
  const square8 = document.querySelector("[data-index='8']");
  const square9 = document.querySelector("[data-index='9']");
  let player1Turn = true;
  let player2Turn = false;
  let computerTurn = false;

  gameContainer.addEventListener("click", function (e) {
    if (e.target.style.backgroundImage === "" && player1Turn === true) {
      e.target.style.backgroundImage =
        "url(https://img.icons8.com/wired/64/000000/x.png)";
      e.target.style.backgroundRepeat = "no-repeat";
      e.target.style.backgroundPosition = "center";
      if (e.target === square1) {
        gameBoardObject.gameBoard[0] = "x";
        e.target.textContent = gameBoardObject.gameBoard[0];
      } else if (e.target === square2) {
        gameBoardObject.gameBoard[1] = "x";
        e.target.textContent = gameBoardObject.gameBoard[1];
      } else if (e.target === square3) {
        gameBoardObject.gameBoard[2] = "x";
        e.target.textContent = gameBoardObject.gameBoard[2];
      } else if (e.target === square4) {
        gameBoardObject.gameBoard[3] = "x";
        e.target.textContent = gameBoardObject.gameBoard[3];
      } else if (e.target === square5) {
        gameBoardObject.gameBoard[4] = "x";
        e.target.textContent = gameBoardObject.gameBoard[4];
      } else if (e.target === square6) {
        gameBoardObject.gameBoard[5] = "x";
        e.target.textContent = gameBoardObject.gameBoard[5];
      } else if (e.target === square7) {
        gameBoardObject.gameBoard[6] = "x";
        e.target.textContent = gameBoardObject.gameBoard[6];
      } else if (e.target === square8) {
        gameBoardObject.gameBoard[7] = "x";
        e.target.textContent = gameBoardObject.gameBoard[7];
      } else if (e.target === square9) {
        gameBoardObject.gameBoard[8] = "x";
        e.target.textContent = gameBoardObject.gameBoard[8];
      }
    }
    console.log(gameBoardObject.gameBoard);
    if (e.target.style.backgroundImage === "" && player2Turn === true) {
      e.target.style.backgroundImage =
        "url(https://img.icons8.com/wired/50/000000/o.png)";
      e.target.style.backgroundRepeat = "no-repeat";
      e.target.style.backgroundPosition = "center";
      if (e.target === square1) {
        gameBoardObject.gameBoard[0] = "o";
        e.target.textContent = gameBoardObject.gameBoard[0];
      } else if (e.target === square2) {
        gameBoardObject.gameBoard[1] = "o";
        e.target.textContent = gameBoardObject.gameBoard[1];
      } else if (e.target === square3) {
        gameBoardObject.gameBoard[2] = "o";
        e.target.textContent = gameBoardObject.gameBoard[2];
      } else if (e.target === square4) {
        gameBoardObject.gameBoard[3] = "o";
        e.target.textContent = gameBoardObject.gameBoard[3];
      } else if (e.target === square5) {
        gameBoardObject.gameBoard[4] = "o";
        e.target.textContent = gameBoardObject.gameBoard[4];
      } else if (e.target === square6) {
        gameBoardObject.gameBoard[5] = "o";
        e.target.textContent = gameBoardObject.gameBoard[5];
      } else if (e.target === square7) {
        gameBoardObject.gameBoard[6] = "o";
        e.target.textContent = gameBoardObject.gameBoard[6];
      } else if (e.target === square8) {
        gameBoardObject.gameBoard[7] = "o";
        e.target.textContent = gameBoardObject.gameBoard[7];
      } else if (e.target === square9) {
        gameBoardObject.gameBoard[8] = "o";
        e.target.textContent = gameBoardObject.gameBoard[8];
      }
    }


    gameController.winCondition();
    gameController.drawCondition();



    if (e.target.textContent === "o") {
      player1Turn = true;
      player2Turn = false;
      computerTurn = false;
    } else if (e.target.textContent === "x") {
      player2Turn = true;
      computerTurn = true;
      player1Turn = false;
    }
    
    

  });
})();