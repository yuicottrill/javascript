const positiveSum = (arr) =>{
    let array = []
    for(let i = 0; i < arr.length; i++){
        const recebePositivo = Number(arr[i])
        if (recebePositivo > 0){
            array.push(recebePositivo)
        }
    }
    if(array.length === 0){
        return 0
    }
    const sum = array.reduce((acc, element)=> acc + element)
    return sum
    

}
console.log(positiveSum([]))