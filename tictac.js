const cells = document.querySelectorAll('.cell');
const statustext = document.getElementById('status');
const resetbtn = document.getElementById('btn');
let board = ["", "", "", "", "", "", "", "", ""];
let currentplayer = 'X';
let playing = true;
const winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function startgame() {
    cells.forEach(cell => cell.textContent = "");
    board = ["", "", "", "", "", "", "", "", ""];
    currentplayer = 'X';
    playing = true;
    statustext.textContent = `Player ${currentplayer} turn`;
}

function cellClicked(e) {
    const index = e.target.getAttribute('data-index');
    if (board[index] !== "" || !playing) return;
    board[index] = currentplayer;
    e.target.textContent = currentplayer;
    checkWinner();
}

function checkWinner() {
    let winner = null;
    winpatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
        }
    });

    if (winner) {
        statustext.textContent = `Player ${winner} wins!`;
        playing = false;
    } else if (!board.includes("")) {
        statustext.textContent = "It's a draw!";
        playing = false;
    } else {
        currentplayer = currentplayer === "X" ? "O" : "X";
        statustext.textContent = `Player ${currentplayer} turn`;
    }
}

cells.forEach(cell => cell.addEventListener('click', cellClicked));
resetbtn.addEventListener('click', startgame);

startgame();
