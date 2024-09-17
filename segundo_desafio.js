// Faça um programa para calcular o valor de uma viagem

//5 variaveis:
//1 - preco do etanol;
//2 - preço da gasolina;
//3 - O tipo de combustível que está no seu carro;
//4 - Gasto médio de combustível por Km;
//5 - Distância em Km da viagem;

//Quero saber o valor gasto para realizar essa viagem

let litroEtanol = 4.21;
let litroGasolina = 6.09;
let tipoDeCombustivel = "gasolina";
let kmPorLitro = 10;
let distanciaViagem = 100;

let kmMedio = distanciaViagem / kmPorLitro;

if (tipoDeCombustivel === "gasolina"){
    let precoTotal = kmMedio * litroGasolina;
    console.log(precoTotal.toFixed(2));
} else if (tipoDeCombustivel === "etanol"){
    let precoTotal = kmMedio * litroEtanol;
    console.log(precoTotal.toFixed(2));
} else{
    console.log("Insira um valor válido");
}
