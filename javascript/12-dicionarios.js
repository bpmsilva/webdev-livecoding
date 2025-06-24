// Declaração de um dicionário
const pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira",
    habilidades: ["JavaScript", "Python", "C++"]
};

// Construção do objeto dicionário:
function criaDicionario(nome, idade, profissao, habilidades) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        habilidades: habilidades
    }
}

// Função de construção de um objeto dicionário simplificada
function criaObjetoDicionario(nome, idade, profissao, habilidades) {
    return { nome, idade, profissao, habilidades }
}

// Exemplo de uso da função de construção do dicionário
const pessoa2 = criaObjetoDicionario("Bob", 25, "Desenvolvedor", ["JavaScript", "Java"]);
const pessoa3 = criaObjetoDicionario("Carlos", 28, "Designer", ["Photoshop", "Illustrator"]);

// Acessando valores do dicionário
console.log("Nome:", pessoa.nome); // Acessando o valor da chave 'nome'
console.log("Idade:", pessoa.idade); // Acessando o valor da chave 'idade'
console.log("Profissão:", pessoa.profissao); // Acessando o valor da chave 'profissao'
console.log("Habilidades:", pessoa.habilidades); // Acessando o valor da chave 'habilidades'
console.log();

// Outra forma de acessar valores do dicionário
console.log("Nome (usando colchetes):", pessoa["nome"]);
console.log("Idade (usando colchetes):", pessoa["idade"]);
console.log("Profissão (usando colchetes):", pessoa["profissao"]);
console.log("Habilidades (usando colchetes):", pessoa["habilidades"]);
console.log(); // Linha em branco para melhor legibilidade

// Adicionando uma nova chave ao dicionário
pessoa.email = "exemplo@exemplo.com";

// Imprimindo o dicionário atualizado
console.log("Dicionário atualizado:", pessoa);
console.log();

// Verificando se uma chave existe no dicionário
console.log("A chave 'nome' existe?", "nome" in pessoa); // true
console.log("A chave 'endereco' existe?", "endereco" in pessoa); // false
console.log();

// Iterando sobre as chaves e valores do dicionário
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Imprimindo cada chave e seu valor
}
console.log();

// Removendo uma chave do dicionário
delete pessoa.idade;

// Imprimindo o dicionário após a remoção
console.log("Dicionário após remoção da chave 'idade':", pessoa);
console.log();

// Chaves do dicionário
console.log("Chaves do dicionário:", Object.keys(pessoa));
console.log();

// Verificando o tamanho do dicionário
console.log("Tamanho do dicionário:", Object.keys(pessoa).length);
console.log();

// Verificando se o dicionário está vazio
const estaVazio = Object.keys(pessoa).length === 0;
console.log("O dicionário está vazio?", estaVazio); // false, pois ainda há chaves no dicionário

// Limpando o dicionário
// Para limpar o dicionário, podemos remover todas as chaves
for (const chave in pessoa) {
    delete pessoa[chave];
}

// Verificando novamente se o dicionário está vazio
const estaVazioAposLimpeza = Object.keys(pessoa).length === 0;
console.log("O dicionário está vazio após limpeza?", estaVazioAposLimpeza); // true
console.log();

// Recriando o dicionário com valores iniciais
pessoa.nome = "Alice";
pessoa.idade = 30;
pessoa.profissao = "Engenheira";
pessoa.email = "exemplo@exemplo.com";
pessoa.habilidades = ["JavaScript", "Python", "C++"];

// Exemplo de uso de métodos do dicionário
// Imprimindo habilidades como uma string separada por vírgulas
console.log("Habilidades:", pessoa.habilidades.join(", "));

// Verificando se uma habilidade específica existe
console.log("A habilidade 'JavaScript' existe?", pessoa.habilidades.includes("JavaScript")); // true
console.log("A habilidade 'Java' existe?", pessoa.habilidades.includes("Java")); // false
console.log();

// Adicionando uma nova habilidade
pessoa.habilidades.push("Java");

// Verificando novamente as habilidades
console.log("Habilidades atualizadas:", pessoa.habilidades.join(", ")); // Imprimindo habilidades atualizadas
console.log();

// Verificando o tipo do dicionário
console.log("Tipo do dicionário:", typeof pessoa); // Deve ser 'object'
console.log();

// Verificando se o dicionário é um objeto
console.log("O dicionário é um objeto?", pessoa instanceof Object); // true
console.log();

// Verificando se o dicionário é um array
console.log("O dicionário é um array?", Array.isArray(pessoa)); // false
console.log();

// Convertendo o dicionário para JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log("Dicionário convertido para JSON:", pessoaJSON);
console.log();


// Convertendo o JSON de volta para um dicionário
const pessoaDeJSON = JSON.parse(pessoaJSON);

// Verificando se o dicionário contém uma habilidade específica
console.log("A habilidade 'Python' existe?", pessoa.habilidades.includes("Python")); // true
console.log("A habilidade 'Ruby' existe?", pessoa.habilidades.includes("Ruby")); // false
