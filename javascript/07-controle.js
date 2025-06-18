/*
    Algumas estruturas de controle
    do JavaScript comparadas com Python:
    - if, else, elif
    - for, while
    - switch
    - break, continue
*/

// Estruturas de controle em JavaScript
// Condicional if-else
// Python: if, elif, else
// JavaScript: if, else if, else
let numero = 10;
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Estrutura de repetição for
// Python: for i in range(5):
// JavaScript: for (let i = 0; i < 5; i++)
for (let i = 0; i < 5; i++) {
    console.log("Iteração:", i);
}

// Estrutura de repetição while
// Python: while condição:
// JavaScript: while (condição)
let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}

// Estrutura switch
// Python: switch não existe, usa-se if-elif-else
// JavaScript: switch
let fruta = "maçã";
switch (fruta) {
    case "maçã":
        console.log("A fruta é uma maçã.");
        break;
    case "banana":
        console.log("A fruta é uma banana.");
        break;
    default:
        console.log("Fruta desconhecida.");
}

// Comandos break e continue
