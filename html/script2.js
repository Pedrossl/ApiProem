const apiUrl = 'http://localhost:3003/cliente';
const cadastroForm = document.getElementById('cadastro-form');
cadastroForm.addEventListener('submit', cadastrarCliente);

async function cadastrarCliente(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os dados do formulário
    const nome = document.getElementById('nome').value;
    console.log(nome);
    const email = document.getElementById('email').value;
    console.log(email);
    const telefone = document.getElementById('telefone').value;
    console.log(telefone);

    // Cria um objeto com os dados do novo cliente
    const novoCliente = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    try {
        // Faz uma solicitação POST para a API para cadastrar o cliente
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCliente)
        });

        if (response.ok) {
            // Limpa o formulário após o cadastro bem-sucedido
            document.getElementById('cadastro-form').reset();            

            // Atualiza a tabela de clientes
            //fetchClientes();
        } else {
            console.error('Erro ao cadastrar cliente');
        }
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error);
    }
}