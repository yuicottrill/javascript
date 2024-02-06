async function resultado(){
    console.log('-'.repeat(30))
    console.log('Aguarde sua operação ser concluida')
    console.log('-'.repeat(30))
    const resultado = await somaNumeros(3)
    console.log(`A soma dos seus números é ${resultado}`)
}

function somaNumeros(x=0,y=0){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve( x + y)
        }, 2000);
    })
}
resultado()