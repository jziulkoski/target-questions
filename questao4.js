//4
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);

for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
    console.log(`Percentual de ${estado}: ${percentual}%`);
}

console.log(`Total de faturamento: R$ ${totalFaturamento.toFixed(2)}`);