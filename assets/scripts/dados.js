// Busca assíncrona de Vagas, (carregando, erro, vazio) //

export async function buscarVagas(atualizarStatusCallback) {
    try {
        atualizarStatusCallback("carregando");

        const resposta = await fetch("./assets/dados/vagas.json");

        if(!resposta.ok) {
            throw new Error("Não foi possível carregar o arquivo de vagas.");
            
        }

        const listaVagas = await resposta.json();
        
        if(!listaVagas || listaVagas.length === 0) {
            atualizarStatusCallback("vazio");
            return []
        }

        atualizarStatusCallback("sucesso");
        return listaVagas;

    
} catch (erro) {
    console.error("erro na requisição das vagas:", erro);
    atualizarStatusCallback("erro");
    return [];
}
}

// LocalStorage //

export function salvarPerfilLocalStorage(dadosPerfil) {
    localStorage.setItem("skillmatch_perfil", JSON.stringify(dadosPerfil));
}

export function recuperarPerfilLocalStorage() {
    const perfilSalvo = localStorage.getItem("skillmatch_perfil");
    if (!perfilSalvo) {
        return null;
    }

    return JSON.parse(perfilSalvo);
}

