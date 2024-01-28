const frm = document.querySelector("form")
const resposta = document.querySelector("h3")
frm.addEventListener("submit", e=>{
    e.preventDefault()
    const nome = frm.inFruta.value
    const numero = frm.inNum.value
    let juncao = ""
    for(i = 1; i <= numero; i++){
        juncao += nome + "*"
        if(i == numero - 1){
            juncao += nome
            break
        }
    }
    resposta.innerHTML = `${juncao}`
})