const botoesCarrosssel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrosssel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();
        marcarBotaoSelecionado(botao);
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice);
        esconderInformacoesAtivas();
        mostrarInformacoes(indice);
        

        function esconderInformacoesAtivas() {
            esconderInformacaoesAtivas();
        }
    });
});

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarInformacoes() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacaoesAtivas(indice) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoes[indice].classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}