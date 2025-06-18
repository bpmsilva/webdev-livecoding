/**
 * Neste exemplo exploramos:
 * - Como declarar um array como constante usando `const`.
 * - A diferença entre reatribuir um array e modificar seus elementos.
 * - Adicionar e remover elementos
 * - Verificar o tamanho do array.
*/

// Declarando um array como constante (const)
const numeros = [1, 2, 3, 4, 5];

// Imprintindo o array
console.log(numeros); // [1, 2, 3, 4, 5]

// Modificando um elemento do array
numeros[0] = 10; // mas deveria ser possível?
console.log(numeros);

// A próxima linha causaria um erro, pois não podemos reatribuir uma constante
// numeros = [6, 7, 8]; // Uncaught TypeError: Assignment to constant variable.

// Adicionando um novo elemento ao array
numeros.push(6);

// Imprimindo o array após a modificação
console.log(numeros); // [10, 2, 3, 4, 5, 6]

// Removendo o último elemento do array
numeros.pop();

// Imprimindo o array após a remoção
console.log(numeros); // [10, 2, 3, 4, 5]

// Verificando o tamanho do array
console.log(numeros.length); // 5

