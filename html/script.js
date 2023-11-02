// URL da API de clientes
const apiUrl = 'http://localhost:3003/cliente';

// Função para buscar os dados da API e preencher a tabela
async function fetchClientes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const clienteTableBody = document.getElementById('cliente-table');
        console.log('data: ', data);
        data.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
            `;
            clienteTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API: ', error);
    }
}

// Chame a função para buscar e preencher os dados da API
fetchClientes();

// Função para lidar com o envio do formulário de cadastro
/*async function cadastrarCliente(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

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
            fetchClientes();


            // Atualiza a tabela de clientes
            //fetchClientes();
        } else {
            console.error('Erro ao cadastrar cliente');
        }
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error);
    }
}*/

// Adicione um ouvinte de eventos para o formulário de cadastro
const cadastroForm = document.getElementById('cadastro-form');

