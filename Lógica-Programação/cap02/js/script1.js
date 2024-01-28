const filme = document.querySelector("form")
const titulo = document.getElementById("Titulo")
const horas = document.getElementById("Horas")
filme.addEventListener("submit", (e) =>{
    const nome = filme.filme.value
    const calculo = filme.minutos.value
    const inteiro = calculo / 60
    const resto = calculo % 60
    titulo.innerHTML = nome
    horas.innerHTML = `O seu filme tem ${Math.floor(inteiro)}h e ${resto}min`
    e.preventDefault()
})
