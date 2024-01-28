const frm = document.querySelector("form")
const resp = document.querySelector("h3")
frm.btCalc.addEventListener("click", ()=>{
    //Obtendo data e acressentando 90 dias
    alert("Você tem até 90 dias para pagar com Desconto")
    const data = frm.inInfracao.value
    const vec = new Date(data)
    vec.setDate(vec.getDate() + 90)
    //Formatando Data
    const formatoData = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dataFormatada = vec.toLocaleDateString('pt-BR', formatoData);
    //Desconto
    const desc = Number(frm.inMulta.value)
    const soma = (desc *20)/100
    //resposta
    resp.innerText = `Você tem até o dia ${dataFormatada} para pagar com desconto. O Desconto será de R$ ${soma}, totalizando R$ ${desc - soma}.`
})