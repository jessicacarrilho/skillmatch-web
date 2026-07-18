# SkillMatch-Web - Projeto Avaliativo

Desenvolvido por: Jessica de Castro Vasconcelos Carrilho

# Links do projeto

Repositório: https://github.com/jessicacarrilho/skillmatch-web
Kanban(Trello): https://trello.com/b/IzvmHLXc/skillmatch-web
Vídeo de apresentação: https://drive.google.com/file/d/1S6dXnjNOoUUQjromddOk_6RjCnk0q9a6/view?usp=sharing


Seja ben-vindo(a) ao repositório do projeto **SkillMatch-Web**.
Este é um projeto prático avaliativo do módulo 01, do curso Desenvolvedor Front-End React do programa SCTec.

# Objetivo

O **SkillMatch-Web** é um motor de compatibilidade entre candidato e vagas Front-End júnior. 
Ele pega as habilidades que o usuário marca no formulário e calcula em tempo real a compatibilidade com vagas reais de Front-End cadastradas no arquivo de dados local, calcula o percentual de compatibilidade com cada vaga e sugere o que estudar para aumentar as chances de aprovação.

# Qual problema o SkillMatch Web Resolve?

Recrutadores e candidatos de Front-End Júnior perdem tempo comparando manualmente uma lista de habilidades com os requisitos de cada vaga. O SkillMatch Web automatiza essa comparação: o candidato preenche seu perfil uma única vez (nome, área, experiência e habilidades), e o sistema:


*calcula o percentual de compatibilidade com cada vaga do catálogo;
*separa as habilidades encontradas e faltantes por vaga;
*classifica cada vaga em Alta, Média ou Baixa compatibilidade;
*destaca a vaga mais compatível com o perfil;
*gera uma recomendação de estudo, com base nas habilidades que mais faltam para conquistar a melhor vaga;
*lembra do perfil do candidato na próxima visita (localStorage).


# Requisitos

### Estrutura e acessibilidade (HTML Semântico)

### Visual Responsivo (CSS3 Flexbox)

### Cérebro do sistema e Organização (Integração com JavaScript)

### Banco de Dados Local e Salvamento (Fetch e LocalStorage)


# Tecnologias Utilizadas

**HTML5** (Estrutura semântica, landmarks, label/for, alt, aria-live, lang);
**CSS3** (Estilização com Flexbox, mobile-first, media-queries);
**JavaScript Nativo** (Módulo ES puro, sem frameworks, módulos ES import/export);
**POO** Classes Vaga e VagaFrontEnd(herança), métodos com this;
**Funcional** map, filter, reduce, callbacks, closures;
**Dados** fetch + async/await com os 3 estados (carregando, vazio, erro)
**Persistência** localStorage (perfil do candidato)
**Git & GitHub** (Organização em branches com Git Flow)


# Funcionalidades demonstradas

*Formulário de perfil com validação nativa (required) e captura via addEventListener + preventDefault.
*Cálculo de compatibilidade considerando habilidades e experiência mínima da vaga.
*Cards de vaga gerados inteiramente por JavaScript (createElement/classList), mostrando empresa, cargo, % de compatibilidade, classificação visual, habilidades encontradas e faltantes.
*Destaque automático da vaga mais compatível, com recomendação de estudo gerada dinamicamente.
*fetch do catálogo de vagas com tratamento de carregando/vazio/erro, anunciado via aria-live.
*Perfil do candidato salvo em localStorage e restaurado automaticamente na próxima visita.

# Arquitetura dos módulos

index.html
└── assets/
    ├── scripts/
    │   ├── main.js   → orquestra o fluxo (importa e conecta os outros módulos)
    │   ├── motor.js  → regras de negócio (classes Vaga/VagaFrontEnd, cálculo de
    │   │               compatibilidade, análise de habilidades, recomendação de estudo)
    │   ├── ui.js     → tela (captura do formulário, renderização dos cards e mensagens)
    │   └── dados.js  → fetch das vagas + localStorage
    ├── dados/vagas.json  → catálogo de vagas (fonte dos dados)
    ├── styles/index.styles.css
    └── img/logo.svg


# Possíveis melhorias futuras

*Adicionar filtro/ordenação de vagas por modalidade ou salário (bônus).
*Persistir tema claro/escuro no localStorage (bônus).
*Deploy no GitHub Pages para acesso via HTTPS sem depender do Live Server.
*Adicionar testes automatizados para o motor de compatibilidade.

## Como testar o projeto no computador

Este projeto usa módulos ES e fetch, por isso não funciona abrindo o arquivo diretamente (file://). É necessário um servidor local:

1. baixe os arquivos deste repositório ou faça um clone pelo terminal. ( git clone https://github.com/jessicacarrilho/skillmatch-web.git )
2. Certifique-se de ter a extensão **LiveServer** instalada no seu VS Code.
3. Abra a pasta do projeto no VS Code, clique com o botão direito no arquivo "index.html" e selecione **"Open With LiveServer"**.
4. O seu navegador vai abrir o site automaticamente no local gerado!

# Autoria

Desenvolvido por Jessica de Castro Vasconcelos Carrilho, como projeto avaliativo do Módulo 01 (Front-End React) — Semana 13.