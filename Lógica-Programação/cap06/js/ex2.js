const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const numerosLista = []
let falseTrue = true
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const add = Number(frm.inNum.value)
    if(!numerosLista.includes(add)){
        numerosLista.push(add)
    } else{
        alert("Esse número já foi adicionado")
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})
frm.inVerificar.addEventListener("click", ()=>{
    if(numerosLista.length == 0){
        alert("Por favor, confira se você adicionou corretamente")
        return
    }
    lista = ""
    listaDecresente = ""
    const ordem = [...numerosLista].sort((a,b) => a-b)
    const ordemDecesente = [...numerosLista].sort((a,b)=> b-a)
    for(let i = 0; i < numerosLista.length; i++){
        if(ordem[i] === numerosLista[i]){
            lista += numerosLista[i] 
            if(i < numerosLista.length-1){
                lista += ","
            }
        }else{
            const temZero = numerosLista.some(lista => lista === 0)
            falseTrue = false
            break
        }
    }
    for(let i = 0; i< numerosLista.length; i++){
        if(ordemDecesente[i] === numerosLista[i]){
            listaDecresente += numerosLista[i]
            if(i < numerosLista.length-1){
                listaDecresente += ","
            }
        }
    }
    if(falseTrue){
        resp.innerText =`Sua lista está em orde crescente =) ${lista}`
    } else{
        resp.innerText = `Sua lista não está em ordem crescente ${listaDecresente}`
    }
})