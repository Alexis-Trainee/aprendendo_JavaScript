function escreva () {
console.log ("Hello World!!!");
}

escreva();

//Função com parametro

function escrevaMensagem (mensagem) {
console.log (mensagem);
}

escrevaMensagem ('Olá'); // Assim é possível imprimir várias mensagens com a mesma função.
escrevaMensagem ('Teresina');// Assim é possível imprimir várias mensagens com a mesma função.
escrevaMensagem ('Piauí');// Assim é possível imprimir várias mensagens com a mesma função.

//Armazenando o resultado de uma função em uma variável.

function soma (a, b) {
return a+b;
}// Até aqui a function não vai imprimir nada só returnar (return) um valor.
//para que o valor seja impresso no console é necessário criar uma variável.

var resultadoDaSoma = soma(10, 5);
console.log (resultadoDaSoma);

//ou imprimindo direto:
console.log (soma(10, 6));

// É possível passar qualquer tipo de valor para os parametros da função como objetos, strings, números, functions,  arrayas...etc.

//Passando um array como parametro de uma função e essa função retornará a soma de todos os valores desse array.




