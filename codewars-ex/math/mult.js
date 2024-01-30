const threeOrFive = (numbers)=>{
    let result = []
    let soma = 0
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] < 0){
            return 0
        }
        if(numbers[i]%3===0 || numbers[i]%5===0){
            if(!result.includes(numbers[i])){
                result.push(numbers[i])
                soma += numbers[i]
            }
        }
    }
    return {result, soma}
}
let numeros = [1,2,3,4,5,5,6,7,8,9]
console.log(threeOrFive(numeros))