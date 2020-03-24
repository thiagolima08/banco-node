class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta, dependentes: Array<Cliente>) {
        super(nome, cpf, conta);
        this.dependentes = dependentes;
    }
    
}
