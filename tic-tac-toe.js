document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelectorAll("#board div");

    board.forEach(function (square) {
        square.classList.add("square");
    });
});

