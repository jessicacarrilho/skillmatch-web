/*Motor de compatibilidade de vagas*/

export class Vaga {
    constructor(id, titulo, empresa, area, habilidadesRequisitadas, experienciaMeses) {
        this.id = id;
        this.titulo = titulo;
        this. empresa = empresa;
        this.area = area;
        this.habilidadesRequisitadas = habilidadesRequisitadas;
        this.experienciaMeses = experienciaMeses;
    }

    vagaCompativelComArea(areaUsuario) {
        return this.area.toLowerCase() === areaUsuario.toLowerCase();
    }

    /*Cálculo de Compatibilidade */
calcularCompatibilidade(habilidadesUsuario, experienciaUsuarioMeses, callbackLog) {
    if (this.habilidadesRequisitadas.length === 0) {
        return 0;
    }

    const habUsuarioMinusculo = habilidadesUsuario.map(habilidade =>
        habilidade.toLowerCase());

    const habilidadesEmComum = this.habilidadesRequisitadas.filter (habilidade =>
        habUsuarioMinusculo.includes(habilidade.toLowerCase()));

    let porcentagemHabilidades = (habilidadesEmComum.length / this.habilidadesRequisitadas.length) * 100;
    let porcentagemFinal = 0;

    if(porcentagemHabilidades >= 75) {
        porcentagemFinal = porcentagemHabilidades;
    } else if (porcentagemHabilidades >= 40) {
        porcentagemFinal = 50;
    } else {
        porcentagemFinal = 20;
    }

    if (experienciaUsuarioMeses < this.experienciaMeses) {
        porcentagemFinal = Math.max(0, porcentagemFinal - 20);
    }

    if(typeof callbackLog === "function") {
        callbackLog(`Compatibilidade calculada para a vaga ${this.titulo}: ${porcentagemFinal.toFixed(0)}%`);
    }

    return parseFloat(porcentagemFinal.toFixed(2));
    }


/* Separa habilidades encontradas x faltantes */
obterAnaliseHabilidades(habilidadesUsuario) {
        const habUsuarioMinusculo = habilidadesUsuario.map(habilidade => 
            habilidade.toLowerCase());
 
        const encontradas = this.habilidadesRequisitadas.filter(habilidade =>
            habUsuarioMinusculo.includes(habilidade.toLowerCase()));
 
        const faltantes = this.habilidadesRequisitadas.filter(habilidade =>
            !habUsuarioMinusculo.includes(habilidade.toLowerCase()));
 
        return { encontradas, faltantes };
    }
}


/* Herança */
export class VagaFrontEnd extends Vaga{
    constructor (id, titulo, empresa, habilidadesRequisitadas,experienciaMeses, frameWorkPrincipal) {
        super (id, titulo, empresa, "Front-End", habilidadesRequisitadas, experienciaMeses);
        this.frameWorkPrincipal = frameWorkPrincipal;
    }
}

//Encontrar a melhor vaga //
export function encontrarMaiorCompatibilidade(vagasCompativeis) {
    if (!vagasCompativeis || vagasCompativeis.length === 0) {
        return null;
    }

    return vagasCompativeis.reduce((melhorVaga, vagaAtual) => {
        return (vagaAtual.compatibilidade > melhorVaga.compatibilidade) ? vagaAtual : melhorVaga;
    });
}

//Closure que conta quantas análises foram feitas na sessão//
export function criarContadorDeAnalises() {
    let totalAnalises = 0;
    return function () {
        totalAnalises++;
        return totalAnalises;
    };
}

// Gera a recomendação de estudo com base nas habilidades que mais faltam //
export function gerarRecomendacaoDeEstudo(vagaDestaque) {
    if (!vagaDestaque || !vagaDestaque.habilidadesFaltantes || vagaDestaque.habilidadesFaltantes.length === 0) {
        return "Parabéns! Seu perfil já atende a todos os requisitos da vaga mais compatível encontrada.";
    }
 
    const habilidadesParaEstudar = vagaDestaque.habilidadesFaltantes.join(", ");
 
    return `Para aumentar sua compatibilidade com a vaga "${vagaDestaque.titulo}" (${vagaDestaque.empresa}), `
        + `recomendamos estudar: ${habilidadesParaEstudar}.`;
}