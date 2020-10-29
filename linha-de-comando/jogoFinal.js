//Criando o game:
/*
 * criar o array deck;
 * este deck deve ter 8 pares de cards;
 * os cards devem ser embaralhados;
 * o usuário não deve ver a possição dos elementos então substituir por algum caractere.
 * seve ser solicitado ao usuário que digite dois números entre 0 e 15 pois cada número vai coresponder a um elemento do array cards;
 * quando digitado os números deve-se verificar se os números correspondem a elementos iguais do array;
 * se sim devem ser exibidos na tela se não nada acontece;
 * o game deve terminar quando todos os pares forem encontrados;
 * o game deve ser multiplay e indicar de quem é a vez;
 * o game deve contabilizar a pontuação de cada jogador;
 */

//const deck =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


//Indica ao usuário o que deve ser feito.
console.log('As seguintes letras (A, B, C, D, E, F, G, H) tem seus respectivos pares e todas tem um número correspondente que estão entre 0 e 15');
console.log ('Digite dois números que correspondam a letras iguais')
//função memorygame é nela que roda todo o game.
function memoryGame() {
    let deck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];//Criado array deck com 8 pares de letras
    let displayDeck = deck.reduce((acc, card) => acc.concat('*'), [])//Cria um novo array chamado displayDeck que substitui cada elemento do array//deck por *.

    //Embaralha os elementos do array.
    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);//faz o cálculo de números aleatórios
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    //Variáveis que recebem um determinado valor
    const shuffledDeck = shuffle(deck);// a constante shuffledDeck recebe o array deck embaralhado.
    let runGame = true;
    let attempts = 0;
    let turn = true;
    //Lopp que testa runGame
    //function turn(play1, play2, checkingTurn) {

    // if (win) {
    //     return "Play One";
    // }
    // return "Play Two";
    // } else {
    // if (win) {
    //     return "Play Black";
    // }
    // return "Play One";
    //}

    const players = { 1: { points: 0 }, 2: { points: 0 }};
    let currentPlayer = 1;
    // var {1:{points}}= players;
    console.log(players);
    

    
    while(runGame) {
        let newDeck = [...displayDeck]; //Cria uma cópia do deck original
        console.log(newDeck)
        var readlineSync = require('readline-sync');//Importa a biblioteca  readlineSyn cpara este documento de texto.
        const checkCards = (firstNumber, secondNumber) => {//checkCards recebe firstNUmber e secondNumber e retorna a função de
            //verificar se os números digitados são diferentes e se os elementos são iguais.
            return firstNumber !== secondNumber && shuffledDeck[firstNumber] === shuffledDeck[secondNumber]
        }


        //É aqui que  firstNumber é convertido em número e apos isso substitui o parametro entre [] de newDeck.
        const firstNumber = Number(readlineSync.question('Primeiro Número:\n')) //converte para Number
        newDeck[firstNumber] = shuffledDeck[firstNumber]//verifica se o primeiro número é igual ao primeiro elemento de shuffledDeck
        console.log(newDeck)//imprimi na tela newDeck.

        const secondNumber = Number(readlineSync.question('segundo Número:\n'))//FAz a mesma coisa que o const firstNumber
        newDeck[secondNumber] = shuffledDeck[secondNumber]
        console.log(newDeck)

        //Tomada de decisão atribuição de valores
        if (checkCards(firstNumber, secondNumber)) {
            displayDeck[firstNumber] = shuffledDeck[firstNumber]//Substitui o * pelo elemento corespondente ao índice
            displayDeck[secondNumber] = shuffledDeck[secondNumber]//Substitui o * pelo elemento corespondente ao índice
        }


        
        if (firstNumber !== secondNumber && shuffledDeck[firstNumber] === shuffledDeck[secondNumber]) {
            console.log('PLAYER IS YOUR TURN!!!!!');
            players[currentPlayer].points++;
        }else if (firstNumber === secondNumber || shuffledDeck[firstNumber] !== shuffledDeck[secondNumber]) {
            console.log ('NEXT PLAYER IS YOUR TURN!!!!!');

            currentPlayer = currentPlayer === 1 ? 2 : 1;
            console.log("Current: Player ", currentPlayer)
        };

        console.log(players);
      
//Tomada de decisão testa se ainda há * se sim continua se não retorna a mensagem 'Parabéns você ganhou'
        if (displayDeck.filter((c) => c === '*').length === 0) {
            if (1 > 2) {
            console.log( 'Parabêns, vocẽ ganhou!')
            return runGame = false;
            }
            }
        //Tomada de decisão testa se a quantidade de temtativas são <100 e se os números são diferentes.
        if (attempts < 10 && !checkCards(firstNumber, secondNumber)) {
            attempts++;
        }
        //Tomada de decisão se ultrapassou mais de 100 tentativas retornar a mensagem 'você perdeu'
        if (attempts > 10) {
            console.log('voce perdeu')
            runGame = false
        };
        
        let counter = attempts;
        console.log ('Turn:',counter);

        
// function play1(score) {
// return score = score + 1;
// };

// function x (a, b, c) {
// return c= (a+b);
// }


// x (verificar, score, accumulate);


    }//rungame
}//memoryGame


memoryGame();//Chama a função







/*const {1: {points: x}, 2: {points: y}} = players;

console.log(x, y);

    if (displayDeck.filter((c) => c === '*').length === 0) {
if (x > y) {
console.log ('Player 1 YOU WIN!!!');
        
        }else if(y > x) {
console.log ('Player 2 YOU WIN!!!');

        }else if (x===y) {
console.log ('GAME TIED!!!');
        };
    };
    */
