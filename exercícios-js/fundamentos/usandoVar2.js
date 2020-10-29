var numero = 1 
{
var numero = 2 
console.log('dentro', numero);
};


console.log('fora', numero);

//O que irá acontecer é que o número 2 será impresso duas veses pois a variável var não respeita limitação por escopo so se estiver dentro de uma function pq var so tem dois tipos de escopo global e local.
