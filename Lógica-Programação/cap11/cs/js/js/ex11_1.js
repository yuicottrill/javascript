const frm = document.querySelector("form"); // Captura elementos da página
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// Nome dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// Vetor que irá armazenar um objeto aposta (com no cavalo e valor da aposta)
const apostas = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do formulário

    const cavalo = Number(frm.inCavalo.value); // Dados do formulário
    const valor = Number(frm.inValor.value);

    // Adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({ cavalo, valor });

    // Variável para exibir a lista das apostas realizadas
    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    // Percorre o vetor e concatena em 'lista' as apostas realizadas
    for (const aposta of apostas) {
        lista += `No ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
    }

    respLista.innerText = lista; // Exibe a lista das apostas
    frm.reset();
    frm.inCavalo.focus(); // Posiciona o cursor em inCavalo
});

// Função auxiliar para obter o nome do cavalo a partir do seu número
function obterCavalo(numero) {
    return CAVALOS[numero - 1] || ""; // Retorna o nome do cavalo correspondente
}
frm.inCavalo.addEventListener("blur", () => {
    // Se não preencheu o campo, limpa respCavalo e retorna
    // (não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
    if (frm.inCavalo.value == "") {
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(frm.inCavalo.value); // Número do cavalo convertido em Number

    if (!validarCavalo(numCavalo)) {
        alert("Número do cavalo inválido");
        frm.inCavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo); // Atribui retorno das funções à variáveis
    const contaNum = contarApostas(numCavalo);
    const total = totalizarApostas(numCavalo);

    // Exibe nome, número de apostas e total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
});
// Função para obter o nome do cavalo a partir do número
const obterCavalo = (num) => {
    const posicao = num - 1; // Posição no vetor (subtrai 1, pois inicia em 0)
    return CAVALOS[posicao]; // Nome do cavalo (da constante CAVALOS)
};

// Função para validar se o número do cavalo é válido
const validarCavalo = (num) => {
    // Retorna o valor resultante da condição (true ou false)
    return num >= 1 && num <= CAVALOS.length;
};

// Função para contar o número de apostas em um cavalo específico
const contarApostas = (num) => {
    let contador = 0;

    // Percorre o vetor apostas
    for (const aposta of apostas) {
        // Verifica se a aposta é no cavalo passado como parâmetro
        if (aposta.cavalo == num) {
            contador++; // Conta +1 quando a aposta é no cavalo do parâmetro
        }
    }

    return contador; // Retorna o número de apostas no cavalo numCavalo
};

// Função para totalizar o valor das apostas em um cavalo específico
const totalizarApostas = (num) => {
    let total = 0;

    // Percorre o vetor apostas
    for (const aposta of apostas) {
        // Verifica se a aposta é no cavalo passado como parâmetro
        if (aposta.cavalo == num) {
            total += aposta.valor; // Soma o valor das apostas
        }
    }

    return total; // Retorna a soma dos valores apostados no cavalo numCavalo
};