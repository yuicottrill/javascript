const frm = document.querySelector("form")
const resp1 = document.getElementById("inMedia")
const resp2 = document.getElementById("inRecApr")
frm.addEventListener("submit", (e) =>{
    const nome = frm.inAluno.value
    const p1 = Number(frm.inPrimeiro.value)
    const p2 = Number(frm.inSegundo.value)
    const calculoMedia = (p1+p2)/2
    resp1.innerHTML = `Sua Média foi de: ${calculoMedia}`
    e.preventDefault()
    if(calculoMedia >= 7){
        resp2.innerHTML = `Parabéns ${nome}. Você foi aprovado(a)!`
        resp2.style.color = "blue"
    } else{
        resp2.innerHTML = `Complicado... ${nome}, você foi reprovado(a)!`
        resp2.style.color = "red"

    }

})