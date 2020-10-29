// armazenando uma função em uma variável
//
const imprimirSoma = function (a, b) {

    console.log (a+b)
}

imprimirSoma(2, 3);


// armazenar uma function arrow em uma variável
//
const soma = (a, b) => {
return a+b
}

console.log (soma(2, 3));


// retorno implícito
//

const imprimir2 = a=> console.log (a);
imprimir2('Legal!!!');
