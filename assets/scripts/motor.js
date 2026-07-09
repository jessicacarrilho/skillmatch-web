/*Motor de compatibilidade de vagas*/

/*Classe Vaga*/
export class Vaga {
    constructor(id, titulo, empresa, area, habilidadesRequisitadas, experienciaMeses) {
        this.id = id;
        this.titulo = titulo;
        this.empresa = empresa;
        this.area = area;
        this.habilidadesRequisitadas = habilidadesRequisitadas;
        this.experienciaMeses = experienciaMeses;
    }


vagaCompativelcomArea(areaUsuario) {
    return this.area.toLowerCase() === areaUsuario.toLowerCase();
}
}

/*Herança*/
export class VagaFrontEnd extends Vaga {
    constructor(id, titulo, empresa, habilidadesRequisitadas, experienciaMeses, frameworkPrincipal) {
        super(id, titulo, empresa, "Front-End", habilidadesRequisitadas, experienciaMeses);
        this.frameworkPrincipal = frameworkPrincipal;
    }
}

/*Calculo de compatibilidade*/
calcularCompatibilidade(habilidadesUsuario, experienciaUsuarioMeses, callbackLog) 
    If (this.habilidadesRequisitadas.length === 0) 
        return 0;
    
    
    const habUsuarioMinusculo = habilidadesUsuario.map(habilidade =>
    habilidade.toLowerCase());
    const habilidadesEmComum = this.habilidadesRequisitadas.filter(habilidade =>
    habUsuarioMinusculo.includes(habilidade.toLowerCase()));

    let porcentagemHabilidades = (habilidadesEmComum.length / this.habilidadesRequisitadas.length) * 100;
    let porcentagemFinal = 0;

    if (porcentagemHabilidades >= 75) {
        porcentagemFinal = porcentagemHabilidades;
    } else if (porcentagemhabilidades >= 40) {
        porcentagemFinal = 50;
    } else {
        porcentagemFinal = 20;
    }
    if (experiênciaUsuarioMeses < this.experienciaMinimaMeses) {
        porcentagemFinal = Math.max(0, porcentagemFinal - 20);
    }

    if (typeof callbackLog === "function") {
        callbackLog(`Compatibilidade calculada para a vaga ${this.titulo}: ${porcentagemFinal.toFixed(0)}%`);
    }

    return parseFloat(porcentagemFinal.toFixed(2));

//Encontrar a melhor vaga
    export function encontrarMaiorCompatibilidade(vagasCompativeis) {
        if (!vagasCompativeis || vagasCompativeis.length === 0) 
            return null;

        // Reduce 
        return vagasCompativeis.reduce((melhorVaga, vagaAtual) => {
            return (vagaAtual.compatibilidade > melhorVaga.compatibilidade) ? vagaAtual : melhorVaga;
            vagasCompativeis[0]
        });

export function criarContadorDeAnalises() {
    let totalAnalises = 0;
    return function () {
        totalAnalises++;
        return totalAnalises;
    };
}



    }

    
