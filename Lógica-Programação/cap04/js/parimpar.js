const frm = document.querySelector("form");
const resposta = document.querySelector("h3");
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value);
    if (num % 2 === 0){
        resposta.innerHTML = `Seu número é par`
        resposta.style.color = "blue"
    } else{
        resposta.innerHTML = `Seu número é impar`
        resposta.style.color = "red"
    }
})