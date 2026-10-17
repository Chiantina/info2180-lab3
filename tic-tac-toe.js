document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    board.forEach(function (square) {
        square.classList.add("square");
    });

    let currentPlayer = "X";
    let gameOver = false;
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    board.forEach(function (square, index) {
        square.addEventListener("click", function () {
            if (gameOver || gameState[index] !== "") {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            let winner = null;

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;

                if (
                    gameState[a] !== "" &&
                    gameState[a] === gameState[b] &&
                    gameState[a] === gameState[c]
                ) {
                    winner = gameState[a];
                    break;
                }
            }

            if (winner) {
                status.textContent =
                    "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });

    board.forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    newGameButton.addEventListener("click", function () {
        board.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        gameState = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        status.textContent =
            "Move your mouse over a square and click to play an X or an O.";

        status.classList.remove("you-won");
    });

});

