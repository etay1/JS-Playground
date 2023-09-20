let playerTurn = true;
let computerMoveTimeout = 0;
let availableButtons;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4,
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Setup the click event for the "New game" button
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  // Create click-event handlers for each game board button
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      boardButtonClicked(button);
    });
  }

  // Clear the board
  newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  // Ways to win
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // Check for a winner first
  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      // Found a winner
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  computerMoveTimeout = 0;
  const buttons = getGameBoardButtons();
  const turnInfo = document.getElementById("turnInfo");
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
    button.classList.remove("x");
    button.classList.remove("o");
    playerTurn = true;

    turnInfo.innerHTML = "Your turn";
  });
}

function boardButtonClicked(button) {
  if (playerTurn) {
    button.innerHTML = "X";
    button.classList.add("x");
    button.disabled = true;
    switchTurn();
  }
}

function switchTurn() {
  const gameStat = checkForWinner();
  const turnInfo = document.getElementById("turnInfo");
  if (gameStat === gameStatus.MORE_MOVES_LEFT) {
    if (playerTurn === true) {
      playerTurn = false;
      turnInfo.innerHTML = "Computer's turn";
      let computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    } else {
      playerTurn = true;
      turnInfo.innerHTML = "Your turn";
    }
  } else {
    playerTurn = false;
    if (gameStat === gameStatus.HUMAN_WINS) {
      turnInfo.innerHTML = "You win!";
    } else if (gameStat === gameStatus.COMPUTER_WINS) {
      turnInfo.innerHTML = "Computer wins!";
    } else {
      turnInfo.innerHTML = "Draw game";
    }
  }
  // TODO: Complete the function
}

/**
 * Gets available buttons
 * @returns {Array} An array of all the available buttons
 */
function getAvailableButtons() {
  const buttons = getGameBoardButtons();
  availableButtons = [];
  buttons.forEach((button) => {
    if (button.innerHTML === "") {
      availableButtons.push(button);
    }
  });

  return availableButtons;
}

function makeComputerMove() {
  const buttons = getGameBoardButtons();
  // chhose a random button that avaiable
  availableButtons = getAvailableButtons();
  let randomButton = Math.floor(Math.random() * availableButtons.length);
  availableButtons[randomButton].innerHTML = "O";
  availableButtons[randomButton].classList.add("o");
  availableButtons[randomButton].disabled = true;
  switchTurn();
}