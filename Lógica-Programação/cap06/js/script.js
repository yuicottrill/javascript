const frm = document.querySelector("form");
const respErros = document.getElementById("outErros");
const respChances = document.getElementById("outChances");
const respDica = document.getElementById("outDica")

const random = Math.floor(Math.random(1,100)*100);
const erros = [];
const chances = 6;
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
    if(random == numero){
        respDica.innerText = "PARABÉNS, VOCÊ ACERTOU"
    } else{
        if(erros.includes(numero)){
            alert("Você já apostou esse número, tente outro")
            frm.btSubmit.disabled = true 
            frm.btNovo.className = "exibe"
        } else{
            erros.push(numero)
            const numErros =  erros.length
            const numChances = chances - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
        } if(numChances == 0){
            alert(`Suas chances acabaram`)
            frm.btSubmit.disabled = true
            frm.btNovo.className = "exibe"
            respDica.innerText = `Game Over!! Número Sorteado: ${random}`
        } else{
            const dica = numero < sorteado ? "maior" : "menor"
            respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
        }
    }
    frm.inNumero.value = "" 
    frm.inNumero.focus() 
});
frm.btNovo.addEventListener("click", () => {
    location.reload() 
})