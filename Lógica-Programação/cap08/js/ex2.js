const frm = document.querySelector("form")
const resp = document.querySelector("pre")
let falseTrue = false
const vogais = 'aeiou'
let total = 0
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inAluno.value
    const completo = validarNome(nome)
    if(falseTrue){
        const sobre = obterSobrenome(nome)
        const totalVogais = obterVogais(nome)
        if (totalVogais < 10) {
            resp.innerText = `${sobre} - Total de vogais: 0${totalVogais}`;
        } else {
            resp.innerText = `${sobre} - Total de vogais: ${totalVogais}`;
        }
    }
    
})
const validarNome = (nome)=>{
    if(!nome.includes(" ")){
        alert("Por favor, Insira nome E sobrenome")
        falseTrue = false
    } else{
        falseTrue = true
    }
    return falseTrue
}
const obterVogais = (nome) =>{
    total = 0
    for(let i = 0; i < nome.length; i++){
        for(let j = 0; j < vogais.length; j++){
            if(nome[i].toLowerCase() == vogais[j]){
                total++
            }
        }
    }
   return total
}
const obterSobrenome = (nome) =>{
        const ultEspaco = nome.lastIndexOf(" ")
        const sobrenome = nome.substr(ultEspaco)
        return sobrenome
}
