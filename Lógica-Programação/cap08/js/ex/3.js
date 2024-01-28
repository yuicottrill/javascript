const frm = document.querySelector("form")
const resp = document.querySelector("h3")
frm.inNo.addEventListener("click", ()=>{
    frm.convSelectYes.className = "oculta"
    frm.convSelectNo.className = "exibe"
    
})
frm.inYes.addEventListener("click",()=>{
    frm.convSelectYes.className = "exibe"
    frm.convSelectNo.className = "oculta"
})
frm.calcDesc.addEventListener("click",()=>{
    const valor = Number(frm.inNum.value)
     // Obtenha a referência correta para o elemento <select>
     const convSelect = frm.inYes.checked ? frm.convSelectYes : frm.convSelectNo;
     // Obtenha o texto da opção selecionada
     const selectText = convSelect.options[convSelect.selectedIndex].text;
    if(selectText === "Sem Convênio"){
        let soma10 = valor - (valor*10)/100
        resp.innerText = `Você recebe 10% de desconto sem convênio, valor R$ ${soma10}`
    } else if(selectText === "Amigo dos Animais"){
        let soma20 = valor - (valor*20)/100
        resp.innerText = `Você recebe 20% de desconto sendo amigo dos animais =), valor a pagar R$ ${soma20}`
    } else{
        let soma50 = valor - (valor*50)/100
        resp.innerText = `Incrivel!!! VOCÊ preserva a vida dos animais acima de tudo. Isso sairá quase de graça, você só precisa pagar R$ ${soma50}`
    }
    
})
