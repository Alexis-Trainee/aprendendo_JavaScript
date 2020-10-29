const notas = [6.7, 7.4, 9.8, 8.1, 7.7]  
//Para cada um dos elementos da nota In irá me devolver o índice i
for (let i in notas) {
console.log (i, notas [i])
}

const pessoa = {
    nome: 'Ana',
    sobreNome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
console.log (`${atributo} = ${pessoa[atributo]}`)
}

//É MUITO MAIS INTERESSANTE UTILIZAR FOR IN PARA OBJETOS DO QUE PARA ARRAY.
