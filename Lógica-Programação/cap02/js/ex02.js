const compra = document.querySelector("form")
const revelarTotal = document.getElementById("produto")
const totalAPagar = document.getElementById("valor")
compra.addEventListener("submit", (e) =>{
    const nome = compra.objeto.value 
    const valorGenerico = Number(compra.aPagar.value)
    const metade = Number((valorGenerico*50)/100)
    revelarTotal.innerHTML = `${nome} Leve 3 desse produto por ${valorGenerico + valorGenerico + metade}`
    totalAPagar.innerHTML = `O terceiro produto custou apenas ${metade}`
    e.preventDefault()
    
})