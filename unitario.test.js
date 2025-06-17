function runUnitTests() {

    function numeroBarracas(barracas) {
        return Number(document.getElementById("barracas").value)
    }

    function produtosPorBarracas(produtos) {
        return Number(document.getElementById("produtos").value)
    }

    function cadastroDeProdutos(produtos) {
        return {
            nome: "Blusa - The Cure",
            preco: 35.00
        }
    }

    function ingressosDisponiveis(barracas) {
        return Number(document.getElementById("ingressos").value)
    }

    function donoDaBarraca(barracas) {
        return "Alex Zappani"
    }

    function cadastroDeUsuarios(usuario) {
        return Number(document.getElementById("usuario").value)
        return {
            nome: "Eduardo Sebben",
            email: "jpdeveloper@gmail.com",
            senha: 27252824
        }
    }

    testar("UNIT - Barracas existentes", () => {
        if (numeroBarracas() < 1) throw new Error("Esperado uma ou mais barracas.");
    });
 
    testar("UNIT - Produtos por barraca", () => {
        if (produtosPorBarracas() < 1) throw new Error("Esperado um ou mais produtos por barraca.")
    })

    testar("UNIT - Nome de produtos", () => {
        const produtos = cadastroDeProdutos()
        if (!produtos.nome || produtos.nome.trim() === "") {
            throw new Error("Produtos devem conter um nome.");
        }
    })

    testar("UNIT - Preço de produtos", () => {
        const produtos = cadastroDeProdutos()
        if (typeof produtos.preco !== "number" || produtos.preco < 0 ) {
            throw new Error("Produtos devem conter um preço.");
        }
    })

    testar("UNIT - Produtos por barraca", () => {
        if (ingressosDisponiveis() < 1) throw new Error("Esperado ingressos disponiveis.")
    })

    testar("UNIT - Dono de uma barraca", () => {
        if (!donoDaBarraca()) throw new Error("Esperado algum dono para a barraca.")
    })

    testar("UNIT - Email do usuário", () => {
        const produtos = cadastroDeUsuario()
        if (!usuario.email || !usuario.email.includes("@")){
            throw new Error("Usuários devem ter um email válido.");
        }
    })

    testar("UNIT - Senha do usuário", () => {
        const produtos = cadastroDeUsuario()
        if (!usuario.senha || usuario.senha,length < 6 || typeof usuario.senha !== "number"){
            throw new Error("Usuários devem ter uma senha válida.");
        }
    })

}