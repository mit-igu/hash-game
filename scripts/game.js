//game variables
let board = [];
//filling board variable
if (board.length == 0) {
    for (i = 0; i < 9; i++) {
        board[i] = "";
    }
}
//turno dos jogadores ( 0 e 1)
let playerTurn = 0;
//game symbols
let symbols = ["o", "x"];
//game status
let gameOver = false;
//scores
let scoreX = 0;
let scoreO = 0;

function handleMove(position) {
    board[position] = symbols[playerTurn];
    isGameOver();
    if (!gameOver) {
        console.log(board, playerTurn);
        playerTurn = (playerTurn == 0) ? 1 : 0;
    } else {
        if (playerTurn == 0) {
            scoreO++;
        } else {
            scoreX++;
        }
    }

}

function isGameOver() {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (i = 0; i < winConditions.length; i++) {
        isWin(winConditions[i][0], winConditions[i][1], winConditions[i][2]);
    }
    if (board.every((position) => position != "") && gameOver == false) {
        gameOver = true;
        alert("Game Over. It's a tie.")
        resetGame();
    }
}

function isWin(pos1, pos2, pos3) {
    if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != "") {
        gameOver = true;
    }
}


function resetGame() {
    for (i = 0; i < 9; i++) {
        board[i] = "";
    }
    playerTurn = 0;
    gameOver = false;
    console.log(board, playerTurn)
}