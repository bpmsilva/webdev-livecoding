fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {

        console.log('Cabeçalho:', response.headers.get("Content-Type"));
        console.log('Corpo:', response.body);
        console.log('Status:', response.status);
        console.log('OK?', response.ok);
        console.log('URL:', response.url);
        console.log('Tipo:', response.type);
        console.log('-------')
        return response.json();
    })
    .then(users => {
        for (let user of users) {
            let linha = `Usuário: ${user.name}, Email: ${user.email}`;
            console.log(linha);
        }
    }).catch(error => console.error('Erro:', error));
