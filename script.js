let jogador1 = {
    simbolo: "x",
    numero:1,
    emoji: "🏀"
}

let jogador2 = {
    simbolo: "o",
    numero:2,
    emoji: "⚽"
}

var gameOver = false;

let board = ["","","","","","","","",""];
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

var jogador = jogador1;


function trocarJogador() {

    if (jogador===jogador1) {
        jogador=jogador2;
    } else {
        jogador=jogador1;
    }
    document.getElementById("n_jogador").innerText=jogador.emoji;
}

function casaLivre(elemento) {
    let classes = elemento.classList;
    if (classes.contains(jogador1.simbolo) || classes.contains(jogador2.simbolo)) {
        return false
    }
    return true;
}

function gameOverCheck() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]
        if (board[seq[0]]!="" && board[seq[0]]===board[seq[1]] && board[seq[1]]===board[seq[2]]) {
            gameOver= true;
            document.querySelector("h2").innerHTML = "Fim de Jogo!"
            break;
        }
    }
    if (gameOver===false) {
        trocarJogador();
    }
}

function jogar(elemento) {
    if (casaLivre(elemento) && gameOver===false) {
        board[elemento.id] = jogador.simbolo;
        console.log(board)
        elemento.classList.add(jogador.simbolo);
        gameOverCheck();
    }
}
