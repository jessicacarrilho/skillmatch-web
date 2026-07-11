// Gerenciamento da Interface do Usuário (DOM)//

// Captura os dados digitados no formulário//
export function obterDadosFormulario() {
    const inputNome = document.querySelector("#nome");
const selectArea = document.querySelector("#area-atuacao");


const checkboxesHabilidades = document.querySelectorAll('input[name="habilidades"]:checked');
const habilidadesSelecionadas = Array.from(checkboxesHabilidades).map(checkbox => checkbox.value);

return {
    nome: inputNome.value.trim(),
    area: selectArea.value,
    habilidades: habilidadesSelecionadas,
    experienciaMeses: 12
};
}

// Preenche o formulário automaticamente //
export function preencherFormulario(dadosPerfil) {
    if (!dadosPerfil) return;

    document.querySelector("#nome").value = dadosPerfil.nome || "";
    document.querySelector("#area-atuacao").value = dadosPerfil.area || "";

    const checkboxes = document.querySelectorAll('input[name="habilidades"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = dadosPerfil.habilidades.includes(checkbox.value);
    });
}

// Exibe mensagens textuais para os estados da Busca //
export function exibirStatusBusca(estado) {
    const divStatus = document.querySelector("#status-busca");
    const containerVagas = document.querySelector("#container-vagas");

    containerVagas.innerHTML = "";

    switch (estado) {
        case "carregando":
            divStatus.textContent = "Carregando vagas compatíveis, por favor aguarde...";
            divStatus.style.color = "#34495e";
            break;
        case "vazio":
            divStatus.textContent = "Nenhuma vaga compatível com sua área de atuação.";
            divStatus.style.color = "#7f8c8d"
            break;
        case "erro":
            divStatus.textContent = "Falha de rede: Não foi possível obter os dados do arquivo de vagas.";
            divStatus.style.color = "#c0392b"
        case "sucesso":
            divStatus.textContent = "";
            break;
        default:
            divStatus.textContent = "";
    }
}

//Renderiza os cards dinamicamente na tela usando componentes DOM nativos //
export function renderizarCardsVagas (vagasCompativeis, idVagaDestaque) {
    const containerVagas = document.querySelector("#container-vagas");
    containerVagas.innerHTML = "";

    vagasCompativeis.forEach(vaga => {
        const card = document.createElement("div");
        card.classList.add("vaga-card");

        if (vaga.id === idVagaDestaque && vaga.compatibilidade > 0) {
            card.classList.add("vaga-destaque");
        }

        const titulo = document.createElement("h3");
        titulo.textContent = vaga.titulo;

        const empresa = document.createElement("p");
        empresa.innerHTML = `<strong>Empresa:</strong> ${vaga.empresa}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Área:</strong> ${vaga.area}`;

        const competencias = document.createElement("p");
        competencias.innerHTML = `<strong>Requisitos:</strong> ${vaga.habilidades}`;

        const compatibilidadeInfo = document.createElement("div");
        compatibilidadeInfo.innerHTML = `<strong>Compatibilidade:</strong> ${vaga.compatibilidade}%`;
        compatibilidadeInfo.style.marginTop = "10px";
        compatibilidadeInfo.style.fontWeight = "bold"

        if (vaga.id === idVagaDestaque && vaga.compatibilidade > 0) {
            const selo = document.createElement ("span");
            selo.textContent = "Melhor Opção para o seu Perfil!";
            selo.style.color = "#27ae60";
            selo.style.fontSize = "0.85rem";
            selo.style.fontWeight = "bold";
            card.appendChild(selo);
        }

        card.appendChild(titulo);
        card.appendChild(empresa);
        card.appendChild(area);
        card.appendChild(competencias);
        card.appendChild(compatibilidadeInfo);

        containerVagas.appendChild(card);
    });
}

