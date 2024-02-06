const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

const init = ()=>{
    carro.style="position:relative;left:0px;width:100px;"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null


const mover = (direction)=>{
    if(direction>0){
        if(parseInt(carro.style.left)<=tamMax){
            carro.style.left= parseInt(carro.style.left)+ (10*direction)+"px"
            anima=setInterval(direction,20,-1)
        }else{
            clearInterval(anima)
        }
    }else if(direction<0){
        if(parseInt(carro.style.left)>=0){
            carro.style.left= parseInt(carro.style.left)+ (10*direction)+"px"
            anima=setInterval(direction,20,-1)
        }else{
            clearInterval(anima)
            
        }
    }

}
btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})
btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(mover,20,-1)
})
btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(mover,20,1)
})


window.addEventListener("load", init)
window.addEventListener("resize",()=>{
    let tamMax = window.innerWidth - parseInt(carro.style.width)

})
