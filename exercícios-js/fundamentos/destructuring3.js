function rand({min= 0, max= 1000}) {//aqui passou destructuring como parametro da função rand
const valor= Math.random()* (max-min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};//aqui criou um objeto
console.log (rand(obj));//aqui chamou a função e substituiu o parametro destructuring pelo objeto
console.log (rand({min: 955}));
//console.log(rand({}));
//console.log (rand());

//Tentando sozinho
//





function aleatorio({minimo = 0, maximo = 50}) {
const valorAleatorio = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(valorAleatorio);
}

const objeto = {maximo: 25, minimo: 0};
console.log (aleatorio(objeto));
