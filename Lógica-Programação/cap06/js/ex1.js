const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []
//Adicionando
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nomes = frm.inClube.value
    clubes.push({nomes})
    frm.inClube.value = " "
    frm.inClube.focus()
    //frm.inListar.dispatchEvent(new Event("click"))
})
//Listando Clubes
frm.inListar.addEventListener("click", ()=>{
    if(clubes.length == 0){
        alert("Você não digitou nenhum clube")
        return
    }
    let lista = " "
    for(const name of clubes){
        lista += `${name.nomes}` + "\n" 
    }
    resp.innerText = `${lista}`
})
//Confronto
frm.inTabela.addEventListener("click", ()=>{
    if(clubes.length == 0 || clubes.length % 2 != 0){
        alert("Você não digitou nenhum clube/o número de clube é impar ")
        return
    }
    lista = ""
    for(let i = 1; i < clubes.length; i++){
        lista += `O clube ${clubes[i].nomes} X ${clubes[i-1].nomes}` + "\n"
    }
    resp.innerText = lista
})