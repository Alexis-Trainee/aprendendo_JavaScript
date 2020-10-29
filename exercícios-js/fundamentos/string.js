const escola = "Cod3r"

console.log(escola.charAt(4)); //Significa que a função vai me dar a letra que está no índice 4 dentro da String. no Ex seria a letra r.
console.log(escola.charAt(5));//Retorna nulo pois não existe o índice 5.
console.log (escola.charCodeAt(3));//Retorna seu número na tabela unicode
console.log (escola.indexOf('3'));// Ira retornar o índice ao qual está associado o valor 3.
console.log (escola.substring(1));//Rertorna todas as strings
console.log(escola.substring(0, 3));//Vai retorna rdo índice 0 ao índice 3 sem incluir o índice 3.
console.log ('Escola'.concat(escola).concat("!"));//Vai concatenar.
console.log ('Escola' + escola + "!");//Vai concatenar.

console.log (escola.replace(3, 'e'));//Vai substituir o valor 3 pela letra e.
console.log ("Ana, Maria, Pedro".split(','));//Vai gerar um array entre os parenteses com a vírgula entre aspas é pra indicar o separador.
