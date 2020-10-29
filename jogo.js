
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
//Lopp que testa runGame
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
//Tomada de decisão testa se ainda há * se sim continua se não retorna a mensagem 'Parabéns você ganhou'
        if (displayDeck.filter((c) => c === '*').length === 0) {
            console.log('Parabêns, vocẽ ganhou!')
            return runGame = false;
        }
//Tomada de decisão testa se a quantidade de temtativas são <100 e se os números são diferentes.
        if (attempts < 100 && !checkCards(firstNumber, secondNumber)) {
            attempts++;
        }
//Tomada de decisão se ultrapassou mais de 100 tentativas retornar a mensagem 'você perdeu'
        if (attempts > 100) {
            console.log('voce perdeu')
            runGame = false
        }
    }
}

memoryGame();//Chama a função

//-----------'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15'


/*
var prompt = require('prompt');
prompt.start();
var deck = prompt.get('informe um número:');
*/

//const deck = cards.reduce((acc, card) => acc.concat([card, card]) , [])
/*for (let i=0; i < cards.length; i++){
    console.log(`A posição ${i} tem o valor ${cards[i]}`);
};
*/
/*
//console.log(cards[0])
var prompt = require('prompt');

  //
  // Start the prompt
  //
prompt.start();

//let pedirCartas = true

var box = cards;

prompt.get(['número1', 'número2'], function(err, result) {
    console.log(result.numero1);
    console.log(result.numero2);

    if (result.numero1 === 0) {
        //pedirCartas = false
     console.log (baralho(cards[0]));
    }
});
*/


/*
const xyz = [
    'X', 'X'
]

console.log(xyz)
*/
