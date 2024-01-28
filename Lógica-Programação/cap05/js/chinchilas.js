const frm = document.querySelector("form")
const resposta = document.querySelector("h3")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const chinchilas = frm.coelho.value
    const anos = frm.anos.value
    let acc = ""
    if(chinchilas < 2 || chinchilas % 2 == 1){
        alert('As chinchilas só podem ser em pares!')
    }
    let populacaoAtual = chinchilas
    for(let i = 1; i <= anos; i++ ){
        acc += `No ano ${i} haverá ${populacaoAtual}\n`
        populacaoAtual *= 3
    }
    resposta.innerText = acc
})