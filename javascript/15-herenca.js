// Herança em JavaScript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late.`);
    }
}

class Gato extends Animal {
    falar() {
        console.log(`${this.nome} mia.`);
    }
}

// Exemplo de uso
const cachorro = new Cachorro('Rex');
const gato = new Gato('Laila');
cachorro.falar(); // Rex late.
gato.falar(); // Laila mia.

// Verificando a herança
console.log(cachorro instanceof Animal); // true
console.log(gato instanceof Animal); // true
console.log(cachorro instanceof Gato); // false
console.log(cachorro.constructor === Cachorro); // true
console.log(gato.constructor === Gato); // true
console.log(cachorro.constructor === Animal); // false
console.log(gato.constructor === Animal); // false

// Palavra-chave super
class AnimalComIdade extends Animal {
    constructor(nome, idade) {
        super(nome); // Chama o construtor da classe pai
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} tem ${this.idade} anos e faz um som.`);
    }
}

// Exemplo de uso com a classe AnimalComIdade
const cachorroComIdade = new AnimalComIdade('Rex', 5);
cachorroComIdade.falar(); // Rex tem 5 anos e faz um som
