const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

//Adicionando na lista
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({ modelo, preco });
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    frm.inModelo.focus();
    frm.btListar.dispatchEvent(new Event("click"));
});
//Listando
frm.btListar.addEventListener("click", () => {
    if (carros.length === 0) {
        alert('Você não adicionou nenhum carro');
        return;
    }
    const lista = carros.reduce((acc, e) =>
        acc + e.modelo + " - R$: " + e.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});
//Filtrando algo especifico
frm.btFiltrar.addEventListener("click", () => {
    const max = Number(prompt(`Qual o valor máximo que o cliente pretende pagar?`));
    if (max === 0 || isNaN(max)) {
        return;
    }
    const carrosFilter = carros.filter(carro => carro.preco <= max);
    if (carrosFilter.length === 0) {
        alert(`Não há carros com preço menor ou igual a ${max}`);
        return;
    }
    let lista = "";
    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Carros Até R$: ${max.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});
//Simulando Desconto
frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt(`Quanto de desconto você quer?`));
    if (desconto === 0 || isNaN(desconto)) {
        alert(`Informe um desconto válido`);
        return;
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }));
    let lista = "";
    for (const aux of carrosDesc) {
        lista += `${aux.modelo} - R$: ${aux.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
