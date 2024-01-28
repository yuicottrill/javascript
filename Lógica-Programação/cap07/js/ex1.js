//Variaveis de controle
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
//Disparando a Criptografia
frm.inCrip.addEventListener("click", (e)=>{
    let nome = frm.inMSG.value
    let lista = ""
    let lista2 = ""
    for(let i = 0; i < nome.length; i++){
        if(i % 2 == 0){
            lista += nome.charAt(i) 
        } else{
            lista2 += nome.charAt(i)
        }
    }
    resp.innerText = lista + lista2
})
//Descriptografando
frm.inDec.addEventListener("click", (e)=>{
    let descriptografia = frm.inMSG.value
    resp.innerText = descriptografia
})