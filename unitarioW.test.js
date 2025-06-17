function runUnitTests() {

    function cadastroCredenciado(cadastroCredenciado) {
        return {
            nome: "Alex Zappani",
            cpf: "111.111.111-11",
            funcao: "Gestor"
        }

    }

    function cadastroVeiculo(cadastroVeiculo) {
        return {
            modelo: "Impala 77",
            cor: "Preto",
            Placa: "LLLNLNN"
        }
    }

    testar("UNIT - Vinculo do cadastro", () => {
        if (cadastroCredenciado()) throw new Error(".");
    });

    testar("UNIT - Cadastro do veículo", () => {
        if (cadastroCredenciado()) throw new Error(".");
    });

}