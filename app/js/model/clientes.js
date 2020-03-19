class Clientes {
    constructor() {
        this.clientes = new Array();
        const cli_1 = new Cliente('Fulano', '10011122233', c1.numero);
        const cli_2 = new Cliente('Cicrano', '20011122230', c2.numero);
        this.clientes.push(cli_1, cli_2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}