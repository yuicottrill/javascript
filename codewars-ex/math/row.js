const rowSumOddNumbers = (n)=>{
    let numStart =  (n * (n - 1)) + 1
    let soma = 0
    for(let i = 0; i <n; i++){
        soma += numStart
        numStart += 2
    }
    return soma
}
console.log(rowSumOddNumbers(1))