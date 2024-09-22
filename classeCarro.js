class Carro{
    marca;
    cor;
    gastoMedioKm;
    
    constructor(marca,cor,gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularPrecoViagem(distanciaViagem,precoGasolina){
        let total = distanciaViagem * this.gastoMedioKm * precoGasolina;
        console.log(total);
    }
}

const meuCarro = new Carro(`Mercerdes`, `Preta`, 1/13);
meuCarro.calcularPrecoViagem(70,6);