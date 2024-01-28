const frm = document.querySelector("form");
const multa = document.querySelector("h3");
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num = Number(frm.inPermt.value)
    const cond = Number(frm.inCondution.value)
    if (cond <= num) {
        multa.innerHTML = `Sem MULTA`;
    } else if (cond <= num*1.2) {
        multa.innerHTML = `Multa Leve`;
    } else{
        multa.innerHTML = `Multa Grave`;
    }
});