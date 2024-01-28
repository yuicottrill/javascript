const frm =  document.querySelector("form")
const resposta = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const decre = Number(frm.inNum.value)
    let vazio = ""
    for(i = 0; i < decre; i++ ){
        vazio += decre - i + ","
    }
    resposta.innerHTML = vazio
})