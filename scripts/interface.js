document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    function handleClick(square) {
        if (board[square.target.id] == "") {
            updateSquare(square);
            handleMove(square.target.id);
            setTimeout(() => {
                if (gameOver) {
                    alert(`Game Over. "${symbols[playerTurn].toUpperCase()}" wins`);
                    resetInterface();
                    resetGame();
                }
            }, 10)


        }
    }

    function updateSquare(square) {
        let updating = square.target;
        updating.innerHTML = `<div class="${symbols[playerTurn]}"></div>`
    }

    function resetInterface() {
        squares.forEach((square) => {
            square.innerHTML = "";
        })
    }

    document.querySelector('#reset').addEventListener('click', resetGame);
    document.querySelector('#reset').addEventListener('click', resetInterface);

})
