function runUnitTests() {

    function cadastroExpositor(cadastroExpositor) {
        return {
            cpf: "111.111.111-11",
        }

    }

    function cadastroPrestador(cadastroPrestador) {
        return {
            cnpj: "11.111.111/0001-11"
        }

    }


    function cadastroColaborador(cadastroColaborador) {
        return {
            nome: "Alex Zappani",
            cpf: "111.111.111-11",
            funcao: "Gestor"
        }

    }

    function validarPlaca(placa) {
    return /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(placa);
    }

    function cadastroVeiculo(cadastroVeiculo) {
        return {
            modelo: "Impala 77",
            cor: "Preto",
            placa: "LLLNLNN"
        }
    }

   
    testar("UNIT - Cadastro do expositor", () => {
        const expositor = cadastroExpositor()
        if (!expositor || !expositor.cpf ) 
        throw new Error("Não existe um expositor")

        if (!validarCPF(expositor.cpf)) {
        throw new Error("CPF do expositor é inválido");
        }
    })

    testar("UNIT - Cadastro do Prestador de Serviço", () => {
        const prestador = cadastroPrestador()
        if (!prestador || !prestador.cnpj ) 
        throw new Error("Não existe um Prestador de Serviço")

        if (!validarCNPJ(prestador.cnpj)) {
        throw new Error("CNPJ do Prestador de Serviço é inválido");
        }
    })

    testar("UNIT - Vínculo do colaborador", () => {
        const colaborador = cadastroColaborador()
        if (!colaborador || !colaborador.nome || !colaborador.cpf || !colaborador.funcao) 
        throw new Error("Não existe um colaborador")

        if (!validarCPF(colaborador.cpf)) {
        throw new Error("CPF do colaborador é inválido")
        }
    })

    testar("UNIT - Cadastro do veículo", () => {
        const veiculo = cadastroVeiculo()
        if (!veiculo || !veiculo.modelo || !veiculo.cor || !veiculo.placa ) 
        throw new Error("Não existe um veículo para estacionar")
    
        if (!validarPlaca(veiculo.placa)) {
        throw new Error("Placa do veículo não validada");
        }
    })

}