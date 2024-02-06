const caixa = document.querySelector("#caixa1")
const btnc_c1 = document.querySelector("#c1")
const cursoAll = [...document.querySelectorAll(".curso")]
cursoAll.map((el)=>{
    el.addEventListener("click", (e)=>{
        e.stopPropagation()
        //console.log("clicou")
    })
})
caixa.addEventListener("click", ()=>{
    console.log("clicou")
})
