function* cores(){
    yield 'red'
    yield 'blue'
    yield 'green'
    yield 'purple'
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)