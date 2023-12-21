function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form = window.document.getElementById('num')
    var res = window.document.getElementById('res')
    if (form.value.length == 0 || Number(form.value) > ano){
        window.alert('Verifique os dados corretamente')
        
    } else{
        var fsex = window.document.getElementsByName('rad')
        var idade = ano - Number(form.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criançaf1.jpg')
            }
            else if(idade > 10 && idade <= 21){
                // jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            }
            else if(idade > 21 && idade <= 60){
                // adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }
            else {
                // velho
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        } else{
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criançam.jpg')
            }
            else if(idade > 10 && idade <= 21){
                // jovem
                img.setAttribute('src', 'homemajovem.jpg')
            }
            else if(idade > 21 && idade <= 60){
                // adulto
                img.setAttribute('src', 'homemadulto.jpg')

            }
            else {
                // velho  
                img.setAttribute('src', 'homemvelho.jpg')

            }
        }
        res.innerHTML = `Detectamos a pessoa do genêro ${genero} com a idade de ${idade}`
        res.appendChild(img)
    }
}