class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private contasCliente: Contas;
    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
        <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contasCliente = new Contas();
    }

    inserirCliente(event: Event) {
        event.preventDefault();
        console.log(this.contasCliente.pesquisar(this.inputConta.value))
        let novoCliente = new Cliente(this.inputNome.value,
            this.inputCpf.value, this.contasCliente.pesquisar(this.inputConta.value));

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementop = document.createElement('p');
        elementop.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementop.appendChild(botaoApagar);
        document.body.appendChild(elementop);
    }


}
