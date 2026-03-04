// Há algumas maneiras de fazer loops em JavaScript

// 1. A mais comum é o for, que é usado para iterar sobre arrays
// ou executar um bloco de código um número específico de vezes
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 2. O while executa um bloco de código enquanto a condição for verdadeira
let contador = 0;
while (contador < 5) {
    console.log('Contador (while):', contador);
    contador++;
}

// Um array para os próximos exemplos
let numeros = [1, 2, 3, 4, 5];

// 3. Também podemos usar o for...of para iterar sobre arrays
for (let numero of numeros) {
    console.log(numero);
}

// 4. Ou o for...in para iterar sobre objetos
let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 5. Podemos usar o forEach para iterar sobre arrays
numeros.forEach((numero) => {
    console.log('Este foi o número: ', numero, end='');
});

// 6. Ou usar o map para criar um novo array com base em um array existente
let quadrados = numeros.map(numero => numero*numero);
console.log(quadrados);
