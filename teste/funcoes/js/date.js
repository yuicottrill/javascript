const  div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer =  document.getElementById("timer")
const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora=hora<10?`0${hora}`:hora
    let minuto = data.getMinutes()
    minuto=minuto<10?`0${minuto}`:minuto
    let segundo = data.getSeconds()
    segundo=segundo<10?`0${segundo}`:segundo
    let allTime = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = allTime
}

const intervalo = setInterval(relogio,1000)