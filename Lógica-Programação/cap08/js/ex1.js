const frm = document.querySelector("form")
const resp = document.getElementById("inRevelar")
const resp2 = document.getElementById("inCatg")
//Quando o Evento for Disparado
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    const traco = retornarTracos(nome)
    const catg = categorizarAluno(idade)
})
//Evento Traço
const retornarTracos = (nome) =>{
    let cifrar = ""
    for(let i = 0; i < nome.length; i++){
        cifrar += "-"
        if(nome[i] == " "){ //Corrige o Erro dos espaços em branco
            cifrar += " "
        }
    }
    resp.innerText = nome + "\n" + cifrar
}
//Categoriza
const categorizarAluno = (idade) =>{
    if(idade <= 12){
        resp2.innerText = "Categoria: Infatil"
    } else if(idade <= 18){
        resp2.innerText = "Categoria: Juvenil"
    } else{
        resp2.innerText = "Categoria: Adulto"
    }
}
frm.reset()