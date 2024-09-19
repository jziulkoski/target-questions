// 2
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let pertence = (numero === a || numero === b);

    while (b <= numero) {
        let proximo = a + b;
        a = b;
        b = proximo;
        
        if (b === numero) {
            pertence = true;
            break;
        }
    }
    
    return pertence;
}

let numeroInformado = 13;

if (pertenceFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}