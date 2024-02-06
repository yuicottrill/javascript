const resp = document.querySelector("#numero")
const button = document.querySelector("#btPromessa")
button.addEventListener("click",(evt)=>{
    promise()
    .then((retorno)=>{ //Se deu certo... Chama o then
        resp.innerHTML = retorno
        resp.classList.remove("erro")
        resp.classList.add("ok")
    }) 
    .catch((retorno)=>{ //Se deu errado...
        resp.innerHTML = retorno
        resp.classList.add("erro")
        resp.classList.remove("ok")
    }) 
})


const promise = ()=>{
    resp.innerHTML = "Processando..."
    let promessa = new  Promise((resolve, reject)=>{
        let  resultado = true
        let time = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo Certo!!")
            }else{
                reject("Algo falhou! Tente novamente :(")
            }
            resultado = true
        }, time)
    })
    return promessa
    
}
resp.innerHTML = "Esperando..."
