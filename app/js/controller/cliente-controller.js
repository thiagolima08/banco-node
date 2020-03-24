class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputConta =
            document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contasCliente = new Contas();
    }
    inserirCliente(event) {
        event.preventDefault();
        console.log(this.contasCliente.pesquisar(this.inputConta.value));
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, this.contasCliente.pesquisar(this.inputConta.value));
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementop = document.createElement('p');
        elementop.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementop.appendChild(botaoApagar);
        document.body.appendChild(elementop);
    }
}
