/**
 * PROJETO AGRINHO 2026 - CATEGORIA PROGRAMAÇÃO
 * Script de Controle de Equilíbrio entre Produção e Sustentabilidade
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // Captura dos elementos do DOM de forma limpa e organizada
    const formElement = document.getElementById("sustainable-form");
    const placeholderMsg = document.getElementById("placeholder-msg");
    const resultsContent = document.getElementById("results-content");
    
    const scoreValue = document.getElementById("score-value");
    const statusBox = document.getElementById("status-box");
    const statusTitle = document.getElementById("status-title");
    const statusDesc = document.getElementById("status-desc");
    const recommendationsList = document.getElementById("recommendations-list");

    // Event Listener para interceptação do envio do formulário
    formElement.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura e conversão dos valores digitados
        const areaCultivo = parseFloat(document.getElementById("area-cultivo").value);
        const manejoSolo = document.getElementById("manejo-solo").value;
        const usoAgua = document.getElementById("uso-agua").value;

        // Execução do motor de cálculo de pontuação (Estruturas Lógicas)
        let pontuacaoSustentavel = 100;
        let recomendacoesGeradas = [];

        // Algoritmo de verificação para Manejo de Solo
        if (manejoSolo === "direto") {
            pontuacaoSustentavel += 0; // Contribui positivamente para manter a nota máxima
            recomendacoesGeradas.push("Excelente escolha com o Plantio Direto. Mantenha a rotação de culturas para enriquecer o solo continuamente.");
        } else if (manejoSolo === "convencional") {
            pontuacaoSustentavel -= 40; // Penalidade por emissão e desgaste
            recomendacoesGeradas.push("Transicione do cultivo convencional para o plantio direto para reduzir a erosão e a emissão de CO₂ do solo.");
        } else if (manejoSolo === "organico") {
            pontuacaoSustentavel += 0;
            recomendacoesGeradas.push("O manejo orgânico regenera a biodiversidade local. Busque certificações de comércio sustentável para valorizar seu produto.");
        }

        // Algoritmo de verificação para Recursos Hídricos
        if (usoAgua === "gotejamento") {
            pontuacaoSustentavel += 0;
            recomendacoesGeradas.push("O gotejamento economiza até 60% de água. Considere integrar sensores de umidade automatizados para otimização máxima.");
        } else if (usoAgua === "aspersao") {
            pontuacaoSustentavel -= 20; // Consumo moderado
            recomendacoesGeradas.push("A aspersão possui perdas por evaporação. Monitore os horários de aplicação (prefira início da manhã ou fim de tarde).");
        } else if (usoAgua === "excesso") {
            pontuacaoSustentavel -= 50; // Impacto severo
            recomendacoesGeradas.push("A irrigação descontrolada causa lixiviação e desperdício de recursos. Instale hidrômetros e mude para sistemas de precisão urgentemente.");
        }

        // Ajuste de limites de segurança da pontuação técnica
        if (pontuacaoSustentavel < 0) pontuacaoSustentavel = 0;

        // Exibição dos dados manipulando as classes CSS
        placeholderMsg.classList.add("hidden");
        resultsContent.classList.remove("hidden");

        // Atualização visual do score
        scoreValue.textContent = pontuacaoSustentavel + "%";

        // Aplicação de regras condicionais de estilização por estado ecológico
        // Limpa classes anteriores para evitar duplicidade de estados
        statusBox.className = "status-box"; 

        if (pontuacaoSustentavel >= 80) {
            statusBox.classList.add("status-excelente");
            statusTitle.textContent = "Equilíbrio Sustentável Perfeito!";
            statusDesc.textContent = `Sua propriedade de ${areaCultivo} hectares consegue produzir em harmonia com o meio ambiente, garantindo o futuro do agro.`;
        } else if (pontuacaoSustentavel >= 50) {
            statusBox.classList.add("status-moderado");
            statusTitle.textContent = "Atenção: Necessita de Ajustes";
            statusDesc.textContent = `A produção em ${areaCultivo} hectares apresenta rentabilidade, mas compromete recursos naturais importantes a médio prazo.`;
        } else {
            statusBox.classList.add("status-critico");
            statusTitle.textContent = "Alto Impacto Ambiental Detectado";
            statusDesc.textContent = "Alerta crítico! O modelo de exploração atual ameaça a sustentabilidade hídrica e a integridade biológica do solo.";
        }

        // Renderização dinâmica da lista de recomendações usando manipulação de array e DOM (forEach)
        recommendationsList.innerHTML = ""; // Limpa a lista antiga
        recomendacoesGeradas.forEach(function(textoRecomendacao) {
            const itemLista = document.createElement("li");
            itemLista.textContent = textoRecomendacao;
            recommendationsList.appendChild(itemLista);
        });
    });
});