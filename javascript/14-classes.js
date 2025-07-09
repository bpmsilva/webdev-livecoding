// Classes em JavaScript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para exibir informações da pessoa
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

// Criando instâncias da classe Pessoa
const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 25);

// Exibindo informações das pessoas
pessoa1.exibirInfo(); // Nome: Alice, Idade: 30
pessoa2.exibirInfo(); // Nome: Bob, Idade: 25
