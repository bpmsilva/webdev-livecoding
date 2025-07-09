// Palavras reservadas: break, continue

// Exemplo de uso do break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Quebrando o loop no 5");
        break; // Interrompe o loop quando i é igual a 5
    }
    console.log(i);
}

console.log("");

// Exemplo de uso do continue
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        // console.log("Pulando o número par:", j);
        continue; // Pula a iteração atual se j for par
    }
    console.log("Número ímpar:", j);
}

console.log("");

// Exemplo de uso do break em um loop while
let k = 0;
while (k < 10) {
    if (k === 3) {
        console.log("Quebrando o loop while no 3");
        break; // Interrompe o loop quando k é igual a 3
    }
    console.log(k);
    k++;
}

console.log("");

// Break dentro de dois loops aninhados
for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        if (a === 1 && b === 1) {
            console.log("Quebrando os loops aninhados no a=1, b=1");
            break; // Interrompe o loop interno
        }
        console.log(`a: ${a}, b: ${b}`);
    }
}

