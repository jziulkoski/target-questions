// 1
let indice = 13;
let soma = 0;
let k = 0;

function calcular() {
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }
    return soma;
}

console.log(calcular());

// RESULTADO: Ao final do processamento, o valor da variável SOMA será 91.