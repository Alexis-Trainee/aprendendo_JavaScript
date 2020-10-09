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
var soma = 0
for (var i=0; i< people.length; i++) {
console.log(people[i]);
 for (var persona in people){
console.log (persona,people[persona])
 }
    soma+= persona
    console.log (soma)
}
