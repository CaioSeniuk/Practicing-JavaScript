class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, nascido em ${this,this.anoNascimento}`);
    }
}

const caio = new Pessoa("Caio", 20);
caio.descrever();