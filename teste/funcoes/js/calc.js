const teclasNum = [...document.querySelectorAll(".num")]
const operator = [...document.querySelectorAll(".op")]
const resp = document.querySelector(".res")
const display = document.querySelector(".display")
const tClean = document.querySelector("#tlimpar")
const tigual = document.getElementById("tigual")
const copy = document.getElementById("tcopy")
const exibir = document.getElementById("abaCalc")
const all = document.getElementById("calc")


let sinal = false
let decimal = false
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if(evt.target.innerHTML=="."){
            if(!decimal){
                decimal = true
                if(display.innerHTML=="0"){
                    display.innerHTML += "0."
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
            
        }
        
    })
})

operator.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML=="0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
           
        
       
    })
})
tClean.addEventListener("click",()=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click",()=>{
    sinal = false
    decimal = false
    const resp = eval(display.innerHTML)
    display.innerHTML = resp
    if(display.innerHTML === "555"){
        display.innerHTML = "Hello, Word =)"
    }
})
copy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})
exibir.addEventListener("click",()=>{
    all.classList.toggle("calcExibir")
})