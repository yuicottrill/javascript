const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const transferir = document.getElementById("btTrans")
const todosCurso = [...document.getElementsByClassName("curso c1")]
todosCurso.map((el)=>{
    el.addEventListener("click",(e)=>{
        el.classList.toggle("selecionar")
    })
})
transferir.addEventListener("click",(e)=>{
    e.preventDefault()
    const selecionados = [...document.getElementsByClassName("selecionar")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionar)")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)

    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})