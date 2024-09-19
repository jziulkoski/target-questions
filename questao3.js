//3
const faturamentoDiario = [
    1500.00, // Dia 1
    2000.00, // Dia 2
    0.00,    // Dia 3 (sem faturamento)
    3000.00, // Dia 4
    2500.00, // Dia 5
    0.00,    // Dia 6 (sem faturamento)
    4000.00, // Dia 7
    1000.00, // Dia 8
    0.00,    // Dia 9 (sem faturamento)
    5000.00, // Dia 10
    // ...
];

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);

    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
    const mediaFaturamento = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia,
        mediaFaturamento
    };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
console.log(`Média mensal: R$ ${resultado.mediaFaturamento.toFixed(2)}`);