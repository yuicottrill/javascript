const frm = document.querySelector("form")
const medic = document.getElementById("inMedicamento")
const promot = document.getElementById("inPromocao")
frm.addEventListener("submit", (e) =>{
    const nome = frm.inRemedio.value
    const preco = frm.inPreco.value
    medic.innerHTML = `Promoção de ${nome}`
    promot.innerHTML = `Leve 2 por apenas ${Math.floor(preco)*2} reais`
    e.preventDefault()

})