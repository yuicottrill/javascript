const frm = document.querySelector("form")
const resp = document.querySelector("pre")
let candidatos = []
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inCandidato.value
    const quant = Number(frm.inAcerto.value)
    candidatos.push({nome,quant})
    frm.inCandidato.value = ""
    frm.inAcerto.value = ""
    frm.inCandidato.focus()
})
frm.btLista.addEventListener("click", ()=>{
    if(candidatos.length == 0){
        alert(`Não há candidatos adicionados`)
        return
    }
    let lista = ""
    for(const nomes of candidatos){
        lista += `O candidato ${nomes.nome} teve ${nomes.quant} acertos` + "\n"
    }
    resp.innerText = lista
})
frm.btAprov.addEventListener("click", ()=>{
    if(candidatos.length == 0){
        alert(`Parece que não há candidatos a ser analisados`)
        return
    }
    let listaAprov = ""
    const necessario = Number(prompt(`Quantos acerto precisa para a segunda fase?`))
    for(const candidato of candidatos){
        if(candidato.quant >= necessario){
            listaAprov += `O candidato ${candidato.nome} está aprovado com ${candidato.quant} acertos` + "\n"
        } 
    }
    if(listaAprov === ""){
        listaAprov += `Parece que nenhum candidato conseguiu atingir a pontuação necessária`
    }
    resp.innerText = listaAprov
})