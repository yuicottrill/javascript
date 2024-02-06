const php = document.getElementById("c2")
php.addEventListener("click",(e)=>{
    alert("Você está acessando a pasta PHP")
    php.classList.add("destaque")
})
const all = [...document.querySelectorAll("div")]
all.map((el)=>{
    el.addEventListener("click",()=>{
        el.classList.add("destaque")
        console.log("foi clicado")
    })
})

function msg(){
    alert("Oi querida")
}