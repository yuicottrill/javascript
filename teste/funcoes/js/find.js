const parray  = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btPesquisar = document.querySelector("#btPesquisar")
const resultado = document.querySelector("#resultado")
const elementsArrays = [2,3,4,10,23,9,5,1]
parray.innerHTML = `[${elementsArrays}]`
btPesquisar.addEventListener("click",(elemnt)=>{
    resultado.innerHTML = `Valor não encontrado.`
   const resp = elementsArrays.find((e,i)=>{
        if(e == txt_pesquisar.value){
            resultado.innerHTML = `O valor encontrado foi ${e} e sua posição ${i+1}`
        }
    })
    console.log(resp)
})