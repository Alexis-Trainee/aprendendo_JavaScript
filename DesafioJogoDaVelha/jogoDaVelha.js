//desafio tic-tac-toe
/* 1 criar uma matriz contendo 3 linhas e 3 colunas. 
 * 2 esta matriz deve ser preenchida com 'x' e 'o'
 * 3 
 */


// const ticTacToe = [
//     ['x', 'x', 'x'], 
//     ['o', 'o', 'o'], 
//     ['x', 'x', 'x']
// ];
const ticTacToe = [
    ['x', 'o', 'x'], 
    ['o', 'o', 'o'], 
    ['x', 'o', 'x']
];
// const ticTacToe = [
//     ['x', 'x', 'x'], 
//     ['o', 'x', 'o'], 
//     ['x', 'o', 'x']
// ];
console.log("Tic-Tac-Toe", ticTacToe)

//var newGame = [...ticTacToe]
////console.log("New Game",newGame)


//for (var newGameX of newGame[0]) {
////  console.log(newGameX)
//}

//for (var newGameY of newGame[1]) {
////console.log(newGameY)
//}

//for (var newGameZ of newGame[2]) {
////console.log(newGameZ)
//}

//var x = newGameX
//var y = newGameY
//var z = newGameZ



// x = ['o', 'o', 'o'];
// console.log('x',x);

// y = ['o', 'x', 'x'];
// console.log('y',y);

// z = ['x', 'o', 'x'];
// console.log('z',z);

console.log('// ------------------------------------------------------------------//')



//for (let valueA of ticTacToe[0]) {
////  console.log(valueA)
//}

//for (var valueB of ticTacToe[1]) {
////console.log(valueB)
//}

//for (var valueC of ticTacToe[2]) {
////console.log(valueC)
//}

var a = ticTacToe[0];
var b = ticTacToe[1];
var c = ticTacToe[2];

// a = ['o', 'o', 'o'];
// console.log('a',a);

// b = ['o', 'x', 'x'];
// console.log('b',b);

// c = ['x', 'o', 'x'];
// console.log('c',c);



//a=x,b=y,c=z

    // if (a===a && a!=b && a!=c) {
// console.log ('YOU WIN')
// }


const checkLineWinner = (a, b, c) => {
    if (a.every(el => el === 'o') && a!=b && a!=c) {
        return 'o'
    }else if (a.every(el => el === 'x') && a!=b && a!=c) {
        return 'x';
    }
}
const winners = [checkLineWinner(a, b, c), checkLineWinner(b, a, c), checkLineWinner(c, a, b)].filter((el) => el);

if (winners.length > 1) {
    console.log("INVALID")
} else if (winners.length === 0) {
    console.log("TIE");
} else {
    console.log(winners[0]);
}

// else if (a,b,c ===['x','x','x'] || a,b,c ===['o','o','o']) {
// console.log('INVALID')

// }
// else if (a!=['x','x','x'] || a!=['o','o','o'] && a!=b && a!=c) {
// console.log ('A TIE')

// }else if (b!=['x','x','x'] || b!=['o','o','o'] && b!=a && b!=c) {
// console.log ('A TIE')
    
// }else if (c!=['x','x','x'] || c!=['o','o','o'] && c!=a && c!=b) {
// console.log ('A TIE')

// }
