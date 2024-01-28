const num = document.querySelector("form")
const exibir = document.querySelector("h3")
num.addEventListener("submit", (e) =>{
    e.preventDefault()
    const recebe = Number(num.inRaiz.value)
    const quadrado = Math.sqrt(recebe)
    if(Number.isInteger(quadrado)){
        exibir.innerHTML = `Seu número é um quadrado perfeito!`
    } else{
        exibir.innerHTML = `Não é um quadrado perfeito`
    }
})