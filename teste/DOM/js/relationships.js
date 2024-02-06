const caixa = document.querySelector("#caixa1")
const btnc_c = [...document.querySelectorAll(".curso")]
const novoElemento = document.createElement("div")
const cursos = [ "HTML", "CSS", "JavaScript", "PHP", "React" ,"MySQL","ReactNative"]
cursos.map((e, indice)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id",`c${indice+1}`)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML = e
    const btn_lixo =document.createElement("img")
    btn_lixo.setAttribute("src", "img/lixeira.png")
    btn_lixo.setAttribute("class","btLixo")
    btn_lixo.addEventListener("click", (e)=>{
        console.log(e.target.parentNode)
        caixa.removeChild(e.target.parentNode)
    })
    novoElemento.append(btn_lixo)
    
    caixa.appendChild(novoElemento)
})
//novoElemento.setAttribute("atributo", "valor")
