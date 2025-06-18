// Declarando e utilizando funções em JavaScript

// Função sem parâmetros e sem retorno
function saudacao() {
    console.log("Olá, mundo!");
}

// Chamando a função
saudacao(); // Saída: Olá, mundo!

// Função com parâmetros e retorno
function soma(a, b) {
    return a + b;
}

// Chamando a função e armazenando o resultado
let resultado = soma(5, 3);
// Exibindo o resultado
console.log("Resultado da soma:", resultado); // Saída: Resultado da soma: 8

// Função com parâmetros padrão
function saudacaoComPadrao(nome = "Visitante") {
    console.log("Olá, " + nome + "!");
}
saudacaoComPadrao(); // Saída: Olá, Visitante!
saudacaoComPadrao("Bob"); // Saída: Olá, Bob!

// Função anônima atribuída a uma variável
const saudacaoAnonima = function(nome) {
    console.log("Olá, " + nome + "!");
};
saudacaoAnonima("Carlos"); // Saída: Olá, Carlos!

// Arrow function
const saudacaoArrowFuntion = (nome) => {
    console.log("Olá, " + nome + "!");
};
saudacaoArrowFuntion("Diana"); // Saída: Olá, Diana!

// Arrow function com retorno implícito
const somaArrowFuntion = (a, b) => a + b;
let resultadoArrow = somaArrowFuntion(10, 20);
console.log("Resultado da soma com arrow function:", resultadoArrow); // Saída: Resultado da
