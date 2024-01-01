function contar(){
    var ini = Number(window.document.getElementById('txti').value)
    var fim = Number(window.document.getElementById('txtf').value)
    var passo = Number(window.document.getElementById('txtp').value)
    var resposta = window.document.getElementById('resultado')
    if (ini == 0 || fim == 0 || passo == 0){
        window.alert('Preencha corretamente os dados!')
    } else{
        resposta.innerHTML = 'Contando...'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)

        for (var c = i; c <= f; c += p){
            resposta.innerHTML += `${c}`
        }
    }

}