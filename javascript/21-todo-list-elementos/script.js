const list = document.getElementById("todo-list");

const TASKS = [
    'Ir ao supermercado',
    'Lavar a roupa',
    'Fazer exercícios',
    'Ler um livro',
    'Cozinhar o jantar',
    'Limpar a casa',
    'Ir para a academia',
    'Assistir a um filme',
    'Escrever um diário',
    'Fazer uma caminhada'
];

document.querySelectorAll(".up").forEach(button => {
    button.onclick = function () {

        const li = this.parentElement;
        const previous = li.previousElementSibling;

        if (previous) {
            list.insertBefore(li, previous);
        }

    };
});


document.querySelectorAll(".down").forEach(button => {
    button.onclick = function () {

        const li = this.parentElement;
        const next = li.nextElementSibling;

        if (next) {
            list.insertBefore(next, li);
        }

    };
});

function createFullList() {
    for (let task of TASKS) {
        const li = document.createElement("li");
        li.textContent = task;

        const upButton = document.createElement("button");
        upButton.textContent = "↑";
        upButton.className = "up";
        upButton.onclick = function () {
            const previous = li.previousElementSibling;
            if (previous) {
                list.insertBefore(li, previous);
            }
        };

        const downButton = document.createElement("button");
        downButton.textContent = "↓";
        downButton.className = "down";
        downButton.onclick = function () {
            const next = li.nextElementSibling;
            if (next) {
                list.insertBefore(next, li);
            }
        };

        li.appendChild(upButton);
        li.appendChild(downButton);
        list.appendChild(li);
    }
}

createFullList();
