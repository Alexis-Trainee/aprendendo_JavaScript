// Inicio
// Receber o primeiro valor e armazenar na variavel m
// Receber o segundo valor e armazenar na variavel n
// Processamento
// Partindo de M e até N, verificar cada número se é par
// Armazenar os números pares do intervalo em um variavel chamada result
// Saida
// Mostra os números pares contidos na variavel result

const questionNine = (m, n) => {
    const result = [];
    // const person = {};

    // person["name"] = "Marcle";
    // person["age"] = 25

    // { "name": "Marcle", "age": 25 }

    for(let i = m; i <= n; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }

    console.log(result)
};
const m = Number(prompt('Primeiro número'))
const n = Number(prompt('Segundo número'))
questionNine(m, n);
// questionNine(15, 35)

// Arrow Function
// () => {}
// Normal Function
// function myFunction() {}
