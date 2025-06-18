// Há quatro formas de criar variáveis em JavaScript:
// var, let, const e sem declaração (implícita - não recomendada).

var nome = 'João';       // Escopo global ou de função (evitar em código moderno)
let idade = 30;          // Escopo de bloco (preferido atualmente)
const PI = 3.14;         // Constante com escopo de bloco (não pode ser reatribuída)

// Sem declaração (implícita - muito não recomendado!)
cidade = 'São Paulo';    //  Cria uma variável global, mas não funciona se estiver em 'strict mode')
