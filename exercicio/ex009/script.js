function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom Dia
        img.src = "fotomanha.jpg"
        document.body.style.background = '#dcb548'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = "fototarde.jpg"
        document.body.style.background = '#531783'
    } else{
        //Boa noite
        img.src = "fotonoite.jpg"
        document.body.style.background = '#531783'
    }
}