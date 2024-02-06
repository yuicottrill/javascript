import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato: function(novoContato, destinoDom){
        const criaDiv = document.createElement("div")
        criaDiv.setAttribute("class","contato")
        const p_nome =  document.createElement("p")
        p_nome.innerHTML = novoContato.nome
        const p_telefone =  document.createElement("p")
        p_telefone.innerHTML = novoContato.telefone
        const p_email =  document.createElement("p")
        p_email.innerHTML = novoContato.email  
        criaDiv.appendChild(p_nome)
        criaDiv.appendChild(p_telefone)
        criaDiv.appendChild(p_email)
        destinoDom.appendChild(criaDiv)
    }
}
export  default contato