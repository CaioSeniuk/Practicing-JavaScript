const precoCombustivelLitro = 5.79;
const kmPorLitro = 10;
const distancia = 124;

const precoTotal = (distancia/kmPorLitro)*precoCombustivelLitro;

console.log(precoTotal.toFixed(2));