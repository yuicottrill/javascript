let countBits = (n) =>{
    let recive = n.toString(2)
    let acumula = 0
    for(let i = 0; i < recive.length; i++){
        if(recive[i] == 1){
            acumula++
        }
    }
    return acumula
}
console.log(countBits(1234))