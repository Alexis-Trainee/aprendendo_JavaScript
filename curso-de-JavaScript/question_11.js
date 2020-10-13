// Problema: Neste sentido, o dono quer
// um programa que leia os preços dos produtos até que seja informado o valor zero. No final o
// programa deve informar o total da compra e perguntar a forma de pagamento. As opções da
// forma de pagamento são: 1) A vista; 2) No cartão de crédito. Se a opção escolhida for a vista,
// então o programa informa o valor da compra com um desconto de 5%. Caso a compra seja no
// cartão de crédito, o programa informa o valor da compra dividido em 4 vezes.

// Inicio
// Inicializar uma variavel chamada prices como um array vazio
// Inicializar uma variavel chamada addPrices como verdadeiro
// Inicializar uma variavel chamada paymentOptions contendo todas as opções de pagamento
// Inicializar uma variavel chamada discount contendo o valor do desconto à ser aplicado
// Processamento
// Ler os preços, salvar os preços na variavel chamada prices
// Quando ler valor 0 ou 0.0, parar a leitura de preços
// Mostrar as opções de pagamento, salvar a opção escolhida em uma variavel chamada paymentOption
// Caso a opção escolhida seja à vista, abatar desconto do preço final
// Caso a opção escolhida seja cartão de cŕedito, dividir o valor total por 4
// Saida
// Retornar o Preço final da compra

// const cashRegister = () => {
//     const prices = [];
//     const paymentCalculation = {
//         "1": (price) => price - price * discount,
//         "2": (price) => price / 4
//     };
//     const discount = 0.05;
//     let addPrices =  true;
//     let paymentOption;

//     while(addPrices) {
//         const newPrice = Number(prompt('Digite o preço: (ou zero para finalizar) '));

//         if (newPrice !== 0) {
//             prices.push(newPrice);
//         } else {
//             addPrices = false;
//         }
//     }

//     paymentOption = prompt('Digite o meio de pagamento: 1) À Vista 2) Cartão de Credito')

//     let totalPrice =  0;

//     for (let price of prices) {
//         totalPrice += price;
//     }

//     if (paymentOption === '1') {
//         return totalPrice - totalPrice * discount;
//     } else if (paymentOption === '2') {
//         return totalPrice / 4;
//     }

//     return totalPrice;
// };

// adicionar produtos com nome e preço
// Desafio: Aplica regra dos preços
// Desafio: Mostrar preço, nome como no recido no supermercado
// const addProducts = () => {
//     let addProducts = true;
//     const products = [];
//     let totalPrice = 0;

//     while(addProducts) {
//         const name = prompt('Digite o nome do produto:')

//         if (Number(name) !== 0) {
//             const price = Number(prompt('Digite o preço do produto: ' + name))
//             // products.push({ name: name, price: price })
//             products.push({ name, price })
//         } else {
//             addProducts = false;
//         }

//     }
//
//     const getPrice = (product) => product.price
//     const prices = products.map(getPrice)
//     const products = [{name: "Aveia", price: 10.25}, {name: "Carne Moida", price: 34.7}]
//
//     [10.25, 34.7]

//     for (let product of products) {
//         totalPrice += product.price
//     }

//     return totalPrice;
// }

// console.log(addProducts())

const cashRegister = () => {
    const prices = [];
    let addPrices =  true;
    let stallments = 4;

    while(addPrices) {
        const newPrice = Number(prompt('Digite o preço: (ou zero para finalizar) '));

        if (newPrice !== 0) {
            prices.push(newPrice);
        } else {
            addPrices = false;
        }
    }

    const paymentOption = prompt('Digite o meio de pagamento: 1) À Vista 2) Cartão de Credito')

    if (paymentOption === '2') {
      const totalStallments = Number(prompt('Digite o número de parcelas: '))
        if (totalStallments > 0) {
            stallments = totalStallments;
        }
    }

    return calculateTotalPrice(prices, paymentOption, stallments)
};

const calculateTotalPrice = (prices, paymentOption, stallments) => {
    let totalPrice =  0;
    let paymentCalculation;
    const discount = 0.05;

    for (let price of prices) {
        totalPrice += price;
    }

    switch(paymentOption) {
        case '1':
            paymentCalculation = (price) => price - price * discount
            break;
        case '2':
            paymentCalculation = (price) => price / stallments
            break
        default:
            paymentCalculation = (price) => price
    }

    return paymentCalculation(totalPrice)
};

// console.log(cashRegister());
