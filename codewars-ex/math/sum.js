const digitalRoot = (n) =>{
    let string = n.toString()
    let empty = []
    for(let i = 0; i < string.length; i++){
        empty[i] = Number(string[i])
    }
    const sum = empty.reduce((acc, elemt) =>  acc + elemt,0)
    if( sum >= 10){
        return digitalRoot(sum)
    } else{
        return sum
    }
    
}
console.log(digitalRoot(456))