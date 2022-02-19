const gameBoardObject = (() => {
    let gameBoard = [];
    return {
      gameBoard: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
    };
  })();
  
  const gameController = (() => {
    /* const player1 = player(
      "x",
      "url(https://img.icons8.com/wired/64/000000/x.png)"
    );
    const player2 = player(
      "o",
      "url(https://img.icons8.com/wired/50/000000/o.png)"
    ); */
      let gameBoard = gameBoardObject.gameBoard;
      let player1Turn = true;
      let player2Turn = false;
  
      return {
  
      winCondition: function () {  
        if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x' )
        {
          return alert('x wins');
        }
        else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x' ) {
          return alert('x wins');
        }
        else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x' ) {
          return alert('x wins');
        }
        if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o' )
        {
          return alert('o wins');
        }
        else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o' ) {
          return alert('o wins');
        }
        else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o' ) {
          return alert('o wins');
        }
      }
      }
  
  
  
  })();
  
  const player = (symbol, backgroundImage) => {
    const input = document.querySelector("input");
  
    return {
      name: input.value,
      symbol,
      backgroundImage,
    };
  };
  
  const computer = {
    name: "computer",
    symbol: "o",
    backgroundImage: "url(https://img.icons8.com/wired/50/000000/o.png)",
  
    playComputer: function () {
      computerTurn = true;
      if ((computerTurn === true)) {
        gameBoardObject.gameBoard.forEach((e) => {
          if (e !== "o") {
            e = "o";
          }
        });
      }
  }
  };
  
  const displayController = (() => {
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
  
    square1.addEventListener("click", function (e) {
      computer.playComputer();
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[0] = "x";
        this.textContent = gameBoardObject.gameBoard[0];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[0] = "o";
        this.textContent = gameBoardObject.gameBoard[0];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square2.addEventListener("click", function (e) {
      computer.playComputer();
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[1] = "x";
        this.textContent = gameBoardObject.gameBoard[1];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[1] = "o";
        this.textContent = gameBoardObject.gameBoard[1];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      computer.playComputer();
      gameController.winCondition();
    });
    square3.addEventListener("click", function (e) {
      computer.playComputer();
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[2] = "x";
        this.textContent = gameBoardObject.gameBoard[2];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[2] = "o";
        this.textContent = gameBoardObject.gameBoard[2];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      computer.playComputer();
      gameController.winCondition();
    });
    square4.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[3] = "x";
        this.textContent = gameBoardObject.gameBoard[3];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[3] = "o";
        this.textContent = gameBoardObject.gameBoard[3];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square5.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[4] = "x";
        this.textContent = gameBoardObject.gameBoard[4];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[4] = "o";
        this.textContent = gameBoardObject.gameBoard[4];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square6.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[5] = "x";
        this.textContent = gameBoardObject.gameBoard[5];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[5] = "o";
        this.textContent = gameBoardObject.gameBoard[5];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square7.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[6] = "x";
        this.textContent = gameBoardObject.gameBoard[6];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[6] = "o";
        this.textContent = gameBoardObject.gameBoard[6];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square8.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[7] = "x";
        this.textContent = gameBoardObject.gameBoard[7];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[7] = "o";
        this.textContent = gameBoardObject.gameBoard[7];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
    square9.addEventListener("click", function (e) {
      if (this.style.backgroundImage === "" && player1Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/64/000000/x.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[8] = "x";
        this.textContent = gameBoardObject.gameBoard[8];
        console.log(gameBoardObject.gameBoard);
      } else if (this.style.backgroundImage === "" && player2Turn === true) {
        this.style.backgroundImage =
          "url(https://img.icons8.com/wired/50/000000/o.png)";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        gameBoardObject.gameBoard[8] = "o";
        this.textContent = gameBoardObject.gameBoard[8];
        console.log(gameBoardObject.gameBoard);
      }
      if (this.textContent === "o") {
        player1Turn = true;
        player2Turn = false;
        computerTurn = false;
      } else if (this.textContent === "x") {
        player2Turn = true;
        computerTurn = true;
        player1Turn = false;
      }
      gameController.winCondition();
    });
  })();  