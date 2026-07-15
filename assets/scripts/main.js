// Configuração principal (Modulo ES) //

//Importação dos modulos locais//
import {VagaFrontEnd, encontrarMaiorCompatibilidade, criarContadorDeAnalises} from "./motor.js";
import { buscarVagas, salvarPerfilLocalStorage, recuperarPerfilLocalStorage } from "./dados.js";
import { obterDadosFormulario, preencherFormulario, exibirStatusBusca, renderizarCardsVagas } from "./ui.js";

//inicializa a Closure para contar as buscas feitas na sessão//
const contarAnalise = criarContadorDeAnalises();

//Função principal que roda automaticamente ao carregar a página//
async function inicializarAplicacao() {

    //Recupera os dados do Localstorage//
    const perfilSalvo = recuperarPerfilLocalStorage();
    if (perfilSalvo) {
        preencherFormulario(perfilSalvo);
    }

    const formulario = document.querySelector("#formulario-perfil");

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const dadosUsuario = obterDadosFormulario();
        salvarPerfilLocalStorage(dadosUsuario);

//Dispara busca a busca assíncrona (fetch) do banco de dados//
        const listaVagasBrutas = await buscarVagas(exibirStatusBusca);

        if (!listaVagasBrutas || listaVagasBrutas.length === 0) return;

        const vagasCompativeis = listaVagasBrutas
        .map(vagaObjeto => {
            return new VagaFrontEnd(
                vagaObjeto.id,
                vagaObjeto.titulo,
                vagaObjeto.empresa,
                vagaObjeto.habilidadesRequisitadas,
                vagaObjeto.experienciaMinimaMeses,
                vagaObjeto.frameworkPrincipal
            );
        })

//Executa o Metodo Map e Filter //
        .filter(vagaInstanciada => vagaInstanciada.vagaCompativelComArea(dadosUsuario.area))
        .map(vagaInstanciada => {
            const logger = (mensagem) => console.log(`[Motor] ${mensagem}`);

            const percentualCompatibilidade = vagaInstanciada.calcularCompatibilidade(
                dadosUsuario.habilidades,
                dadosUsuario.experienciaMeses,
                logger
            );

            const { encontradas, faltantes } = vagaInstanciada.obterAnaliseHabilidades(dadosUsuario.habilidades);

            return { 
                ...vagaInstanciada,
                compatibilidade: percentualCompatibilidade,
                habilidadesEncontradas: encontradas,
                habilidadesFaltantes: faltantes
            };
        });

        if (vagasCompativeis.length === 0) {
            exibirStatusBusca("vazio");
            return;
        }

// Executa o Reduce para encontrar o objeto com a maior compatibilidade //
        const melhorVagaElegivel = encontrarMaiorCompatibilidade(vagasCompativeis);
        const idMelhorVaga = melhorVagaElegivel ? melhorVagaElegivel.id : null;
        exibirStatusBusca("sucesso");
        renderizarCardsVagas(vagasCompativeis, idMelhorVaga);

        const numerodaAnalise = contarAnalise();
        console.log(`[contador] Análise realizada com sucesso! Total nesta sessão: ${numerodaAnalise}`);
        exibirResumoPerfil(dadosUsuario, numerodaAnalise);

// Gera e exibe a recomendação de estudo //
        const mensagemRecomendacao = gerarRecomendacaoDeEstudo(melhorVagaElegivel);
        exibirRecomendacaoEstudo(mensagemRecomendacao);



    }
    )   
}
//Executa a inicialização do sistema completo
inicializarAplicacao();
