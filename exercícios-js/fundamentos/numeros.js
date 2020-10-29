const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total/ (peso1 + peso2);

console.log(media);
//Algumas funcões:
console.log(media.toFixed(2));//Faz  o controle de casas decimais que eu quero que seja mostrado.
console.log (media.toString());//Retorna o valor numérico como uma string.
console.log (media.toString(2));//Vai retornar em valor binário.
console.log (typeof media);
console.log (typeof Number);//Number com n maiúsculo é uma função e com n minúsculo é um tipo de dado valor numérico tanto inteiro como .flutuante
