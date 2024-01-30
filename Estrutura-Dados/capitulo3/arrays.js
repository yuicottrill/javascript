/*const tempo = []
tempo[0] =  29.1
tempo[1] = 30.5
tempo[2] = 25.3
tempo[3] = 40
let diasDaSemana = new Array()
diasDaSemana = new Array(7)
diasDaSemana = new Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado")
for(i = 0; i < diasDaSemana.length; i++){
    console.log(diasDaSemana[i])
}*/
//Fazendo fibonnaci
let fibonacci = [] //array vazio
fibonacci[1] = 1
fibonacci[2] = 1
for(let i = 3/*começa com 3 pois o indice 1 e 2 ja tem valor*/; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
for(let i = 1; i < fibonacci.length; i++){
    //console.log(fibonacci[i])
}
numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = 10
//console.log(numbers)
numbers.push = 11
let averageTempDay = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 72]]
const matrix = (myMatrix) =>{
    for(let i = 0; i < myMatrix.length; i++){ // Passando pela as linhas
        for(let j = 0; j < myMatrix[i].length; j++){ // Passando pela coluna
            console.log(myMatrix[i][j])
        }
    }
}
//matrix(averageTempDay)
const multi3x3x3 = [] //Array com linha, coluna e profundidade
for(let i = 0; i < 3; i++){
    multi3x3x3[i] = []
    for(let j = 0; j < 3; j++){
        multi3x3x3[i][j] = []
        for(let z = 0; z < 3; z++){
            multi3x3x3[i][j][z] = []
        }
    }
}
const zero = 0 
const positiveNumbers = [1,2,3,4,,5]
const negativeNumbers = [-1,-2,-3,-4,-5]
let numbers1 = negativeNumbers.concat(zero, positiveNumbers)
//console.log(numbers1)
let numerais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let even = numerais.every((x)=>{return x%2===0})
let even1 = numerais.some((x)=>{return x%2===0})
//console.log(even)
//console.log(even1)
let filterEven = numerais.filter((x)=>{return x%2===0})
//console.log(filterEven)
//console.log(numerais.reduce((acumulador, elemento)=>{return acumulador+elemento}))
for(const n of numerais){
    //console.log(n % 2===0 ? 'even' : 'odd')
}
let interar = numerais[Symbol.iterator]();
for(const n of numerais){
    //console.log(n)
}
//console.log(interar.next().value)
let pegaTudo = Array.from(numerais)
let everyEven = Array.from(numerais, (x)=> x%2===0 ? 'even' : 'odd')
//console.log(everyEven)
let diverso = [1,2,3,4,5,6]

let copyAray = [...diverso]
copyAray.copyWithin(0,3)
//console.log(copyAray)
let copy = [...numerais].reverse()
copy.sort((a,b)=> a-b)
//console.log(copy)
const friends = [
    {Name:'Paulo', age:30},
    {Name:'Maria', age:20},
    {Name:'Pedro', age:15}

]
function comparteAge(a,b){
    if(a.age<b.age){
        return -1
    } if(a.age > b.age){
        return 1
    }
    return 0
}
//console.log(friends.sort(comparteAge))
const amigos = ["Ana","Pedro","ana","Herobrine"]
amigos.sort((a,b) => a.localeCompare(b))
//console.log(amigos)
const arrayExemplo = [1,2,3,4,5,1]
//console.log(arrayExemplo.indexOf(1))
//console.log(arrayExemplo.lastIndexOf(1))
let numberOne = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleOf13(element, index, array) {
return (element % 13 == 0);
}
/*console.log(numberOne.find(multipleOf13));
console.log(numberOne.findIndex(multipleOf13));
console.log(numberOne.includes(15)) // true
console.log(numberOne.includes(20)) // false*/
//console.log(numberOne.toString())
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i=0; i<length; i++){
int16[i] = i+1;
}
console.log(int16);