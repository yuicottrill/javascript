const frm = document.querySelector("form");
const resultado = document.querySelector("h3");
frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value;
    const altura = Number(frm.inAltura.value);
    const masculino = frm.inMasc.checked;
    let peso;
    if (masculino){
        peso = 22*Math.pow(altura,2)
        resultado.innerHTML = `${nome}: Seu peso ideal é ${peso}`
    } else{
        peso = 21*Math.pow(altura,2)
        resultado.innerHTML = `${nome}: Seu peso ideal é ${peso}`
    }
    e.preventDefault()

});
frm.addEventListener("reset", ()=>{
    resultado.innerText = " "
});