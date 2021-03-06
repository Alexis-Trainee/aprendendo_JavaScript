//console.log ("alexis");
console.log ("bem vindo ao curso");

//variáveis----------------------------------

/*
let idade=10;
console.log (idade);
let altura=175;
console.log (altura);
*/


/*
Maneiras de nomear uma variável
Não pode iniciar por números,caracteres especíais, ou espaços em branco.
O ideal é começar por letra minúscula e se for duas ou mais palavras iniciar com letra minúsculae a próxima maiúscula.
EX: nome da rua: nomeDaRua (camelCase).
*/

let idade= 32;
let  nome= "alexis";//CARACTERES se declaram em aspas!!!
let altura= 1.75;

console.log (idade);
console.log (nome);
console.log (altura);

// ------------------------------Constantes----------------(let)--(const)--------------------------------------

let valorIngressoAdulto= 20; //valor variável utilize apenas quando a necessidade de mudar valores.

valorIngressoAdulto=30;
console.log (valorIngressoAdulto);

const valorIngressoInfantil= 10; //valor constante não muda mais recomendado usar se os valores não mudam. É uma recomendação de boas praticas.
console.log (valorIngressoInfantil);


//-------------------------------------------------Tipos Primitivos-----------------------------------------------------------------------

//TIPOS DE VALORES:
let nomePessoa ='Alexis';//String
let idadePessoa = 32; //Number
let estaAprovado = true; //Boolean
let sobreNome = undefined;//Undefined
let corSelecionado = null;//Null Redefine um valor;


//---------------------------------------- TIPOS DE REFERÊNCIAS----------------------------------------------

//OBJETOS:
//Ex1:
let cidade={};//<---Criado um objeto vazio.

//Ex2:
let pessoa= {
    nome: 'Maria',
    idade: 20,
    estaAprovado:  true,
    sobreNome: 'de Sousa',
    estado: 'Piauí',
    altura: 1.70,
    peso: '60KG',
};

console.log (pessoa);

//ARRAYS:
let familiaIdade = [5,6,7,8];
console.log (familiaIdade.length);
console.log (familiaIdade [0]);

let casa = ['azul','grande','tijolo','telha','cimento'];//Nunca esquecer de por aspas nas strings.
console.log (casa.length);
console.log (casa [2]);


//------------------------------FUNCÕES---(FUNCTION)-------------------------
//FUNCTION:
let corSite= 'blue';
function resetaCor(cor){
    corSite = cor;
};

console.log (corSite);//Verifica o parametro de corSite
resetaCor ("yellow");//Chamando a função para modificar o parâmetro
console.log (corSite);//Para verificar o novo parâmetro


//-------------------CONCATENANDO---------------------------------------
let corDoSite = 'green';
function  resetColor (color, tonalidade){
    corDoSite = color +  tonalidade;//Dar um espaço emtre as strings e o sinal de + para que os nomes não aparecam juntos.
    // cor +' '+ tonalidade Essa é outra forma de concatenar e a mais recomendada.
};

console.log (corDoSite);
resetColor ('red',' white');
console.log (corDoSite);

//-----------------------Tipos de função

// Realiza uma tarefa mas não devolve nada.

function dizerNome () {
    console.log ('José');
};                              //Apenas realiza a terefa de dizer o nome mas não realiza nada com está função.

dizerNome();

// Fazer um calculo ou operação e retornar algo.


function multiplicarPorDois(valor) {
    return valor*2;

};

console.log (multiplicarPorDois(5));

let resultado= multiplicarPorDois(5);// Aqui foi criada uma variável e a função colocada(atribuida) dentro dela.
console.log (resultado);


//-----------Operadores Aritiméticos---------------------------
//+,-,/,*,** oepradores básicos o ultimo que dizer exponenciação(**).
//++,-- operadores de incremento e decremento.
//OPERADORES BÁSICOS
let salario = 100;

console.log (salario + salario);
console.log (salario - salario);
console.log (salario / salario);
console.log (salario * salario);
console.log (salario ** salario);

//OPERADORES DE INCREMENTO E DECREMENTO....
let anoIdade = 20;

console.log (anoIdade ++);//Colocando os sinais depois da variável o resultado so aparecerá na próxima linha 
console.log (anoIdade);//   quando console.log (anoIdade); for digidado novamente

let diaDoMes = 15;

console.log (-- diaDoMes);//Colocando os sinais antes da variável o resultado o resultado aparecerá na mesma linha sem necessidade de digitar outra linha.

//-----------------------------Operadores de Atribuição----------------------------------------------------

/*
 =
 +=
 -=
 */

let valorTecladoGamer = 100;

valorTecladoGamer += valorTecladoGamer;//é o mesmo que digitar: valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
console.log (valorTecladoGamer);

let valorComputador = 500;

valorComputador -= valorComputador;//é o mesmo que digitar: valorComputador = valorComputador - valorComputador;
console.log (valorComputador);

//---------------------------------------------------OPERADORES DE IGUALDADE------------------------------------------------------------------//
//IGUALDADE ESTRITA//
console.log (1===1);/* Retorna VERDADEIRO (TRUE) os 3 iguais (===) comparam o valor e o tipo.*/
console.log ('2'===2);

//IGUALDADE SOLTA//
console.log ('1'==1); /* Retornará VERDADEIRO (TRUE) mesmo o primeiro número sendo uma string isso acontece por que diferentemente da igualdade 
estrita a igualdade solta (==) compara apenas os valores e ignora o tipo.No caso do exemplo o primeiro número é uma string mas, isso é ignorado
pela igualdade solta que só compara o valor contido dentro da string.*/

//Operador Ternário//

//Um cliente,mais de  100 pontos é premium do contrário comum.
let pontos = 200;// primeiro definimos a variável.
//Pontos é igual a 100
let  tipo = pontos > 100 ? 'premium': 'comum';
//Então qual o TIPO do cliente? Se pontos  for > que 100 ele vai ser do tipo (?) 'premium' do contrario(:) 'comum' 
console.log (tipo);

//--------------------------------------Operadores Lógicos---------------------------------------------------//
//operador lógico E (&&) retorna verdadeiro se todos os operandos forem verdadeiros.

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log ('pode aplicar: ', podeAplicar);

//operador Lógico OU (||) retorna verdadeiro se pelo menos um dos operandos é verdadeiro.
let menorDeIdade = false;
let temHabilitacao = true;

let aplica = menorDeIdade || temHabilitacao;

console.log ('pode aplicar: ', aplica);

//Operador NOT (!) retorna VERDADEIRO se for FALSO e FALSO se for VERDADEIRO.
let temPoliticoOnesto = !true;

console.log ('existe politico onesto no Brasil: ', temPoliticoOnesto );



//--------------------------------------MINI PROJETOS-------------------MINI PROJETOS--------------------------------------------------------//

//-----MINI-PROJETO 01//
let a = 'vermelho';
let b = 'azul';

//console.log (a);
//console.log (b);

//criamos uma terceira variável para salvar o valor q está em (a).
let c=a;// agora o valor de (a) ficara armazenado em (c).

a=b; // agora (a) vai receber (b).
b=c; // e (b) vai receber (c) que possúi o valor de (a).

console.log (a); 
console.log (b);

//-----CONDICIONAIS--IF-ELSE-----//

let hora = 10;// definimos uma variável e um valor para ela.

/* 
 Se a hora estiver entre 06:00 e 12:00: escreva 'Bom dia';
 Se a hora estiver entre 12:00 e 18:00: escreva "Boa noite";
 Caso contrário se nenhuma das opcões à cima não se aplica escreva: 'Boa noite';

 if (aqui definimos uma condição) {
aqui entra o código a ser executado!!!
 }

else if (outra condição) {
código a ser executado!!!
}

else {
código a ser executado!!!
}

*/

if (hora >6 && hora < 12) {
    console.log ('Bom dia!');
}

else if (hora > 12 && hora < 18) {
    console.log ('Boa tarde!');
}

else {
    console.log ('Boa noite!');
}


//---CONDICIONAL----SWITCH-CASE-----//
let permissao = "comum";//comum, gerente, diretor

switch (permissao) {
    case "comum":
        console.log ('Usuário comum');
        break;

    case "gerente":
        console.log ("Usuário gerente");
        break;

    case "diretor":
        console.log ("Usuário diretor");
        break;

    default: 
        console.log ('Usuário não reconhecido');
}

//LAÇO FOR (LOOP FOR)//
for (let i=0; i<5; i++) {
    console.log ('Estou aprendendo!',i);// vai imprimir Estou aprendendo! 5 vezes no console do browser.
}

//imprimindo apenas os números ímpares:
for (let j=0; j<=5; j++) {
    if (j%2 !==0){
        console.log (j);
    }
}

//imprimindo números ímpares na decrescente:

for (let k=10; k>=1; k--) {
    if (k%2 !==0) {
        console.log (k);
    }
}

//imprimindo números pares:
for (let l=0; l<=10; l++) {
    if (l%2 ==0) {
        console.log (l);
    }
}

//LOOP--(LAÇO)--WHILE//
let I=5;
while(I>=1) {
    if (I % 2 !==0) {
        console.log (I);
    }
    I--;//Repare que o operador de decremento também fica fora do parenteses da condição.
}

//LAÇO DO...WHILE//
let A= 0;//em do...while também é necessário declarar uma variável primeiro.
do {
    console.log ('Digitando!');
    A++;//Nunca esquecer o operador de incremento ou decremento para não gerar problemas de loops infinitos.

} while (A<10)//O laço while e a condição vem fora de DO.

/* A maior diferença entre WHILE E DO..WHILE é que:

 * WHILE: Verifica primeiro e executa depois.

 * DO..WHILE: Executa primeiro uma vez e depois verifica.
 */

let e=0;
do{
    console.log ('Digitando!',e);//Colocando a variável fará com que o índice também seja exibido.
    e++;
} while (e<10)

//LAÇO FOR IN---//
const pessoa3 = {//OBJETO
    nomeDePaula: 'Paula',
    idade: 30
};

for (let chave in pessoa3) {
    console.log (chave,pessoa3['nomeDePaula']);
}


const cores= ['laranja', 'preto', 'rosa'];//array.
for (let indice in cores) {
    console.log (indice,cores[indice])
}
/*
const carro = {
    rodas: 4,
    portas: 4,
    cor: 'vermelho',
    combustivel: 'flex',
};

for (let explorar in carro) {
console.log (explorar,carro[combustivel]);
}
*/

//-------------------------------------------------TESTE----------------------------------------------------------//

const people= [{idade: 25}, {idade: 12}, {idade: 7}];
let valorTotal = 0;

for (persona of people){
    valorTotal +=persona.idade;
}

console.log (valorTotal)


//For OF...............................................

for (let mostraCor of cores){
    console.log (mostraCor)
}

//.........................................................EXERCÍCIO................................................/////
//Escreva uma função que usa dois números e retorna o maior entre eles.
//
//1- Criar duas variáveis para os dois números.
//2- Criar uma função que compare os dois números.
//3- Retornar o mair valor encontrado.
//
let number1 = 5;
let number2 = 10;

if (number1>number2) {
    console.log ("O maior número é:",number1);
}

else if(number2>number1) {
    console.log ("O maior número é:",number2);
}
else {
    console.log ("Os dois números são iguais!!!");
}

//Resolução do problema utilizando função: (Está resolução foi a realizada no vídeo.)///////
let maiorValor=max(5,9);
console.log (maiorValor);

function max(numero1, numero2) {
    if (numero1>numero2)
        return numero1;
    else return numero2;
}

//Ex2 utilizando operador ternário.

let retornaMaior =max(50,25);
console.log (retornaMaior);
function max (numeral1,numeral2) {
    return numeral1>numeral2 ?numeral1 : numeral2;
}

//...................................
let retornarNumero =max(30,40);
console.log (retornarNumero);
function max (N1, N2) {
    return N1 > N2 ?N1 : N2;
}

const resultado1 = fizzBuzz(true);
console.log (resultado1);

function fizzBuzz(entrada){
    //código a ser execultado
    if (typeof entrada!=='number')//Faz o teste para ver se não é um número se não for retorna a menssagem não é um número.
        return 'Não é um número';

    if (entrada % 2 === 0 && entrada % 5 === 0)//Testa para ver se o número é divisível por 2 e por 5 se for retorna FizzBuzz.
        return 'FizzBuzz';

    if (entrada % 2===0)//Testa para ver se o número é divisível por 2 se for retorna Fizz.
        return 'Fizz';

    if (entrada % 5===0)//Testa para ver se o número é divisível por 5 se for retorna a menssagem Buzz.
        return 'Buzz';

    return entrada;//Retorna a entrada se não for uma string e o número não for divisível por 2 nem por 5.

}

//Exercitando:::::::::::::::::::::::::::::
const comparativo1 = fizzBuzz (5);
console.log (comparativo1);

function fizzBuzz(pc) {
    if (typeof pc !== 'number')
        return 'Não é um número';

    if (pc % 2 === 0 && pc % 3 ===0)
        return 'FizzBuzz';

    if (pc % 2 === 0)
        return 'Fizz';

    if (pc % 3 ===0)
        return 'Buzz';

    return pc;
}


//:::::::::::::::::::::::::://
const caixinha = fizzBuzz(5);
console.log (caixinha);

function fizzBuzz(caixa){

    if (typeof caixa!=='number')
        return 'Não é um número';

    if (caixa % 2===0 && caixa % 3===0)
        return 'FizzBuzz';

    if (caixa % 2===0)
        return 'Fizz';

    if (caixa % 3 ===0)
        return 'Buzz';

    return caixa;
}

const aA = fizzBuzz(5);
console.log (aA);

function fizzBuzz(bB) {
    if (typeof bB !== 'number')
        return 'Não é um número';

    if (bB % 2 ===0 && bB % 3 ===0)
        return 'FizzBuzz';

    if (bB % 2 ===0)
        return 'Fizz';

    if (bB % 3 ===0)
        return 'Buzz';
    return bB;
}

const recebe = fizzBuzz ('teste');
console.log (recebe);

function fizzBuzz (entradaDigital) {

    if (typeof entradaDigital !== 'number')
        return 'Not a number';

    if (entradaDigital % 2 ===0 && entradaDigital % 3 ===0)
        return 'FizzBuzz';

    if (entradaDigital % 2 ===0)
        return 'Fizz';

    if (entradaDigital % 3 ===0)
        return 'Buzz';

    return entradaDigital;
}

//------------------------------------------------------------Question 1--------------------------------------------------//

//Escreva um programa que verifique se um número digitado pelo usuário é menor, igual ou maior que zero.
//Algoritmo:
//
//Entrada 
//Criar uma variável de valor igual a zero.
//Criar uma variável de valor variável.
//
//Processamento:
//Comparar a segunda variável com a primeira para ver se são iguais ou se a segunda é maior ou menor que a primeira.
//
//Saída
//se a segunda variável for maior que a primeira retorne a mensagem: Maior que zero.
//se a segunda variável for menor que a primeira retorne a mensagem: Menor que zero.
//se a segunda variável for igual a primeira retorne a mensagem: Igual a zero.

let n1 = 0;
let n2 = 0;

if(n2 > n1) {
    console.log ('Maior que zero');
}
else if (n2 < n1) {
    console.log ('Menor que zero')
}
else {
    console.log ('Igual a zero')
}


// Resolução do problema acima capturando a variável do usuário.
/*
var valorSTR = prompt('Digite um valor qualquer:');
var valor = parseInt (valorSTR);

if (valor >0) {
document.write('Maior que 0.');
}
else if (valor <0) {
document.write('Menor que 0.');
}
else {
document.write('Igual a 0');
}
*/
//Resolução do problema 1 melhorado.

/*
let valorASerDigitado = prompt ('Por favor Digite um valor qualquer:');
let value = parseInt (valorASerDigitado);
debugger
if ( value === NaN) {
document.write ('Não é um número');
}

if (value > 0) {
document.write ('Maior que zero');
}

else if (value < 0) {
document.write ('Menor valor');
}

else if(value === 0){
document.write ('Valor Igual');
}
*/


//----------------------------------------------------Question 2--------------------------------------------------------//

//Resolucão do problema 2: 
//Escreva um programa que informe se um dado ano é ou não bissexto. 
//Obs.: um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.

//Algoritmo :
//Entrada
//criar uma variável que receberá o valor do ano.
//criar uma variável para armazenar o valor.
//
//Processamento
//dividir o valor recebido por 400 ou 4 e por 100.
//
//saída
//se o resultado da divisão por 400 ou por 4 for resto igual a 0 o resultado da divisão  por 100 o resto for diferente de 0  então:
//retorne a mensagem:  o ano é bissexto.
//Se não, se  o resultado da divisão por 100 for igual a 0 então retorne a mensagem: o ano não é bissexto.

/*
let anoDigitado = prompt ('Digite o ano:');
let anoInformado = parseInt (anoDigitado);

if (anoInformado % 400 === 0 || anoInformado % 4 === 0 && anoInformado % 100 !== 0) {
document.write ('O ano Informado é bissexto!');
}
else {
document.write ('O ano não é bissexto');
}
*/

//------------------------------------------------------Question 3------------------------------------------------------------//

//Resolução do problema 3:
/*Escreva um programa que mostre todos os números pares no intervalo de 1 a 40 de forma
decrescente, utilizando o comando while. Depois faça o mesmo, mas desta vez, utilizando o
comando for.*/

//Algoritmo:
//
//Parametro se saída:
//Criar uma variável que receba o valor inicial 40.
//
//Processamento:
//fazer a subtração do valor 40 enquanto o valor for maior que 1
//dividir cada valor encontrado pela subtração  por 2 
//Saída
//se o resto da divisão por 2 for igual a 0 o numero é par e este valor deve retornar ao usuário.
//
//Utilizando WHILE:
let i = 40;

while (i>1){
    if (i % 2 ===0) {
        console.log (i);
    }
    i--;
}

//Utilizando FOR:

for (let z= 50; z>1; z--) {
    if(z % 2 ===0) {
        console.log (z);
    }
}

//---------------------------------Question 4------------------------------------------------//

/*Um determinado banco abriu uma linha de crédito para os funcionários públicos. Porém, o
valor máximo da prestação não poderá ultrapassar 30% do salário deste funcionário. Faça um
programa para ajudar este banco. O programa deve permitir o usuário entrar com o salário do
funcionário e o valor da prestação e informar se o empréstimo pode ou não ser concedido.*/

//Algoritmo.
//
//Entrada
//Criar uma variável para receber o valor do salário e outra para o valor da parcela.
//Criar uma variável para armazenar o valor de salário e outra para armazenar o valor da parcela.
//
//Processamento
//comparar o valor da parcela ao salário * 0.30 e checar se o valor fica maior, nenor ou igual a 30% do salário.
//
//Saída 
//se o valor for maior que 30% do salário retorne a mensagem: credito negado.
//se o valor for igual ou menor que 30% do salário retorne a mensagem: credito aprovado.

/*
let salarioMensal= prompt ('Digite quanto vc ganha:');
let sal = parseFloat (salarioMensal);
const monthlySalary = Number(prompt('Digite quanto voce ganha: '))
const stallment = Number(prompt('Digite o valor da parcela'))

const maxStallment = monthlySalary * 0.3;
if (stallment > maxStallment) {
}

let parcela = prompt ('Digite o valor de parcela desejado:');
let parc = parseFloat (parcela);

if (parc > sal * 0.30) {
    document.write ('Credito negado!');
}
else {
    document.write ('Credito aprovado');
}
*/

//-------------------------------------------Question 5--------------------------------------------------------------//
//Escreva um programa que leia o mês do ano em valor numérico e exiba este mês por extenso (utilize o comando switch).
//Algoritmo:
//
//Entrada
//Criar uma variável para receber um número de 1 a 12 digitado pelo usuário.
//Solicitar ao usuário que digite um número de 1 a 12.
//Armazenar esse número na variável que foi criada anteriormente.
//Criar uma condição para cada número de 1 a 12 que corresponda a um mês do ano.
//
//Processamento
//Quando um número de 1 a 12 for digitado chamar o caso correspondente com o respectivo número.
//
//Saída 
//Exibir a mensagem do mês que corresponda ao número digitado.
/*
let mesDoAno = prompt ('Digite um número de 1 a 12');

switch (mesDoAno){

    case '1':
        document.write ('Janeiro');
        console.log ('Janeiro');
        break;

    case '2':
        document.write ('Fevereiro');
        console.log ('Fevereiro');
        break;

    case '3':
        document.write ('Março');
        console.log ('Março');
        break;

    case '4':
        document.write ('Abril');
        console.log ('Abril');
        break;

    case '5':
        document.write ('Maio');
        console.log ('Maio');
        break;

    case '6':
        document.write ('Junho');
        console.log ('Junho');
        break;

    case '7':
        document.write ('Julho');
        console.log ('Julho');
        break;

    case '8':
        document.write ('Agosto');
        console.log ('Agosto');
        break;

    case '9':
        document.write ('Setembro');
        console.log ('Setembro');
        break;

    case '10':
        document.write ('Outubro');
        console.log ('Outubro');
        break;

    case '11':
        document.write ('Novembro');
        console.log ('Novembro');
        break;

    case '12':
        document.write ('Dezembro');
        console.log ('Dezembro');
        break;
}

*/


