
let pedirCartas = true

prompt.get(['carta1', 'carta2'], function(err, result) {
    console.log(result.carta1);
    console.log(result.carta2);

    if (result.carta1 === '0') {
        pedirCartas = false
    }
});

const cards = [
    'X', 'X' 
]

console.log(cards)
