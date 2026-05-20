/**
 * VERSÃO SIMPLIFICADA - CÁCULO DIRETO
 * Projeto Agrinho 2026
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Captura os elementos necessários do HTML
    const formElement = document.getElementById("sustainable-form");
    const placeholderMsg = document.getElementById("placeholder-msg");
    const resultsContent = document.getElementById("results-content");
    const scoreValue = document.getElementById("score-value");
    const statusTitle = document.getElementById("status-title");
    const statusDesc = document.getElementById("status-desc");

    // 2. Cria a única interação: o clique do botão (envio do formulário)
    formElement.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede a página de recarregar

        // 3. Pega o número que o usuário digitou
        const hectares = parseFloat(document.getElementById("area-cultivo").value);

        // 4. Faz uma lógica simples: se a fazenda tiver menos de 50 hectares, ganha nota 90, se tiver mais, nota 70
        let notaSustentavel = 0;
        if (hectares < 50) {
            notaSustentavel = 90;
        } else {
            notaSustentavel = 70;
        }

        // 5. Mostra o painel de resultados na tela
        placeholderMsg.classList.add("hidden");
        resultsContent.classList.remove("hidden");

        // 6. Atualiza os textos com o resultado
        scoreValue.textContent = notaSustentavel + "%";
        statusTitle.textContent = "Análise Concluída";
        statusDesc.textContent = `Propriedade de ${hectares} hectares avaliada com sucesso frente às metas ecológicas do Agrinho 2026.`;
    });
});