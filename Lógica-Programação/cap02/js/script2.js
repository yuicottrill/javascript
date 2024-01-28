const carros = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")
carros.addEventListener("submit", (e) =>{
    const nome = carros.inVeiculo.value
    const entrada = Number(carros.inPreco.value)
    const pelaMetade = (entrada*50)/100
    resp1.innerHTML = `Promoção: ${nome}`
    resp2.innerHTML = `Entrada em R$: ${pelaMetade}`
    resp3.innerHTML = `+12x de R$: ${Math.floor(pelaMetade/12)}`
    e.preventDefault()
})