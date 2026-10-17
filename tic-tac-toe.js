document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelectorAll("#board div");

    board.forEach(function (square) {
        square.classList.add("square");
    });

    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];

    board.forEach(function (square, index) {
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
    
});

