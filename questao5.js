let str = "Exemplo de string";

function inverterString(input) {
    let resultado = '';
    
    for (let i = input.length - 1; i >= 0; i--) {
        resultado += input[i];
    }
    
    return resultado;
}

const strInvertida = inverterString(str);
console.log(`String original: ${str}`);
console.log(`String invertida: ${strInvertida}`);