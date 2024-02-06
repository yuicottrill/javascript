//const q1 = document.getElementById("q1")
//const q2 = document.getElementById("q2")
//const qposx = document.getElementById("qposx")
//const qposy = document.getElementById("qposy")
//const largura = document.getElementById("largura")
//const altura = document.getElementById("altura")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log(`Latitude: ${latitude}`)
        console.log(`Longitude:${longitude}`)
    })
}else{
    console.log(`O navegador não suporta a localização`)
}