const squareDigits = (num) =>{
    const transform = num.toString()
    let result = ''
    for(let i = 0; i < transform.length; i++){
       result += Math.pow(Number(transform[i]), 2)
   }
   return Number(result)
}
console.log(squareDigits(3212))