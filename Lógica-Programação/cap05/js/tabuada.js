const frm = document.querySelector("form")
const resposta = document.querySelector("h3")
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)
    let acc = ""
    for(let i = 1; i < 11; i++){
        acc += `O número ${num} x ${i} = ${num*i}\n` 
    };
    resposta.innerText = acc
});