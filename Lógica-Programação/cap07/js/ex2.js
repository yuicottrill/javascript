const frm = document.querySelector("form")
const resp = document.querySelector("h3")
let falseTrue = false
//Disparando o evento de verificação
frm.inClicar.addEventListener("click", (e)=>{
    //Obtendo e ajustando as variáveis
    const msg = frm.inFrase.value
    let msg1 = msg.replace(/ /g,"").toUpperCase()
    let tam = msg1.length
    let inverso = ""
    //Invertendo
    for(let i = tam -1; i >= 0; i--){
        inverso += msg1.charAt(i)
    }
    //Testando a condição...
    if(msg1 === inverso){
        falseTrue = true
    }
    //Resposta 
    if(falseTrue){
        resp.innerText = `A sua frase ${msg} é um palíndromo`
    } else{
        resp.innerText = `A sua frase ${msg} Não é um palíndromo`
    }
})