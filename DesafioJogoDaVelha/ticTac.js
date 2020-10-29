// Entrada matrix com o resultado do jogo
// Processamento
// - Verificar ganhador em cada linha
// - se encontrar ganhador salvar o ganhador
// - caso encontremos mais de um ganhador o jogo é invalido
// - Verificar ganhador em cada coluna
// - se encontrar ganhador salvar o ganhador
// - caso enconremos mais de um ganhador o jogo é invalido
// - Verificar ganhador nas duas diagonais
// - se encontrar ganhador salvar o ganhador
// - caso encontremos mais de um ganhador o jogo é invalido
// - Retornar o ganhador caso exista um
// - Caso nenhum ganhador e o jogo é valido, retornar um empate.


// ['x', 'x', 'x']
// line[0] = 'x'
// true
const checkLineWinner = (line) => line.every((player) => line[0] === player);

const checkWinner = (game) => {
    const lineWinners = game.filter(checkLineWinner).map((line) => line[0]);

    let columnWinners = [];
    let diagonalWinners = [];
    
    for(let i = 0; i < game.length; i++) {
        const column = [
            game[0][i],
            game[1][i],
            game[2][i]
        ];
        const columnWinner = checkLineWinner(column);
        if (columnWinner) {
            const winner = column[0];
            columnWinners.push(winner);
        }
    }

    const firstDiagonal = [
        game[0][0],
        game[1][1],
        game[2][2],
    ];

    const firstDiagonalWinner = checkLineWinner(firstDiagonal);

    if (firstDiagonalWinner) {
        const diagonalWinner = firstDiagonal[0];
        diagonalWinners.push(diagonalWinner);
    }

    const secondDiagonal = [
        game[0][2],
        game[1][1],
        game[2][0],
    ];

    const secondDiagonalWinner = checkLineWinner(secondDiagonal);

    if (secondDiagonalWinner) {
        const secondDiagonalWinner = secondDiagonal[0];
        diagonalWinners.push(secondDiagonalWinner);
    }

    if (lineWinners.length > 1) {
        return 'INVALID';
    }

    if (columnWinners.length > 1) {
        return 'INVALID';
    }

    if (diagonalWinners.length > 1) {
        return 'INVALID';
    }

    if (lineWinners.length === 1 && columnWinners.length === 1) {
        return 'INVALID';
    }

    if (lineWinners.length === 1 && diagonalWinners.length === 1) {
        return 'INVALID';
    }

    if (columnWinners.length === 1 && diagonalWinners.length === 1) {
        return 'INVALID';
    }

    const winners = [].concat(lineWinners, columnWinners, diagonalWinners);

    if (winners.length === 1) {
        return winners[0];
    }

//     if (lineWinners.length === 1) {
//         return lineWinners[0];
//     }

//     if (columnWinners.length === 1) {
//         return columnWinners[0];
//     }

//     if (diagonalWinners.length === 1) {
//         return diagonalWinners[0];
//     }

    return 'TIE';
};

const xWinColumn = [
    ['x', 'x', 'o'],
    ['x', 'o', 'x'],
    ['x', 'o', 'o']
];
const xWinLine = [
    ['x', 'x', 'x'],
    ['o', 'o', 'x'],
    ['x', 'o', 'o']
];
const xWinFirstDiagonal= [
    ['x', 'x', 'o'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];
const xWinSecondDiagonal= [
    ['o', 'x', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];
const oWinColumn = [
    ['o', 'x', 'o'],
    ['o', 'x', 'x'],
    ['o', 'o', 'x']
];
const oWinLine = [
    ['o', 'o', 'o'],
    ['o', 'x', 'x'],
    ['x', 'o', 'x']
];
const oWinFirstDiagonal = [
    ['o', 'x', 'o'],
    ['x', 'o', 'x'],
    ['x', 'o', 'o']
];
const oWinSecondDiagonal = [
    ['o', 'x', 'o'],
    ['x', 'o', 'x'],
    ['o', 'o', 'x']
];
const tie = [
    ['o', 'x', 'o'],
    ['o', 'x', 'x'],
    ['x', 'o', 'o']
];
const invalidLineWinner = [
    ['o', 'o', 'o'],
    ['x', 'x', 'x'],
    ['x', 'o', 'o']
];
const invalidColumnWinner = [
    ['x', 'o', 'o'],
    ['x', 'o', 'x'],
    ['x', 'o', 'o']
];

console.log("X tem que vencer. Vencedor: ", checkWinner(xWinLine));
console.log("X tem que vencer. Vencedor: ", checkWinner(xWinColumn));
console.log("X tem que vencer. Vencedor: ", checkWinner(xWinFirstDiagonal));
console.log("X tem que vencer. Vencedor: ", checkWinner(xWinSecondDiagonal));

console.log("O tem que vencer. Vencedor: ", checkWinner(oWinLine));
console.log("O tem que vencer. Vencedor: ", checkWinner(oWinColumn));
console.log("O tem que vencer. Vencedor: ", checkWinner(oWinFirstDiagonal));
console.log("O tem que vencer. Vencedor: ", checkWinner(oWinSecondDiagonal));

console.log("Empate. Vencedor: ", checkWinner(tie));
console.log("Jogo tem que ser invalido. Vencedor: ", checkWinner(invalidLineWinner));
console.log("Jogo tem que ser invalido. Vencedor: ", checkWinner(invalidColumnWinner));
