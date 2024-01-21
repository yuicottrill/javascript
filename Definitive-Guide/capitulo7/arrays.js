let vazio = [] // Um array vázio
let primos = [2,3,5,7,11,13] // Um array de números primos
let misto = [1.1, true, "a"] // Um array misto
let empty = [1,,2] // empty[1] retorna underfined
//console.log(empty[1])
let x = new Array() // um array que não tem elementos definido
let y = new Array(10) // um array com um único elemento
let z = new Array(10,5, true, "Oie","Bom dia") // um array com + de dois elemnt
//console.log(z)
let a1 = ["Olá, mundo", "Newjeans"]
console.log(a1[1]) // lê o elemento 1
a1[2] = "Minji" // adiciona um novo elemento no indice 2
i = 0
a1[3] = i // adiciona um terceiro elemento
a1[4] = i+1 // mais um
//console.log(a1)
let miMi = new Array(5)
let Hyein = []
Hyein[1000] = 0
//console.log(Hyein.length)
let table = new Array(10)
for (var i = 0; i < table.length; i++){
    table[i] = new Array(10)
}
for(var row = 0;  row < table.length; row++){
    for(var col = 0; col < table[row].length; col++){
        table[row][col] = row*col
    }
}
let porrinha = [1, 2, 3]
porrinha.join() // [1,2,3]
porrinha.join(" ") // 1 2 3
porrinha.join('-') // 1-2-3
let porra2 = [1, 2, 3]
porra2.reverse().join('-')
//console.log(porra2)
let misericordia  = new Array("Pizza", "Framingo", "Rice")
misericordia.sort()
var s = misericordia.join(", ")
//console.log(s)
let misericordinha /*filha dele*/ = [33, 4, 100, 2000, 5, 1, 23]
misericordinha.sort() // ordem alfabetica  1, 100, 2000, 23, 33, 4, 5
misericordinha.sort(function(a,b){
    return a-b
}); 
//console.log(misericordinha) // ordem númerica  1,  4, 5, 23,33, 100,2000
// caso return for b-a, inverte
let animais = ["Cachorro", "bode", "Vaca", "sapo"]
animais.sort(function(s,t){
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})
//console.log(animais) // [ 'Cachorro', 'bode', 'Vaca', 'sapo' ]
let lista = [1,2,3,4,5,6,7,8];
//console.log(lista.splice(1,2)) // começa do 2 e termina no 3
//console.log(lista.splice(4)) // conta tudo a partir do 5
//console.log(lista.splice(1,1))
let data = [1,2,3,4,5];
/*let sum = 0;
data.forEach(function(elemento){
    sum += elemento;
});
console.log(sum)*/
data.forEach(function(element,indice,lista){
    lista[indice] = element + 2
})
//console.log(data)
let hanni = [1,2,3,4]
b = hanni.map(function(x){return x*x})
//console.log(b)
let danielle = [1,2,3,4]
pequenoValores = danielle.filter(function(x){
    return x < 3
})
//console.log(pequenoValores)
let ariel34 = [2,4,6,8,10]
aquiFalso = ariel34.every(function(x){
    return x % 3 === 0
})
//console.log(aquiFalso)
aquiVerdadeiro = ariel34.every(function(x){
    return x % 2 === 0
})
//console.log(aquiVerdadeiro)
let haerin = [1,2,3,5,7,11]
aquiTrue0 = haerin.some(function(x){
    return x % 2 === 1
})
aquiTrue1 = haerin.some(function(x){
    return x % 2 === 0
})
//console.log(aquiTrue0)
//console.log(aquiTrue1)
let minji = [42,18,7,56,29]
let soma1 = minji.reduce(function(acc,e){
    return acc + e
})
//console.log(soma1)
let mult1 = minji.reduce(function(acc,e){
    return acc*e
})
//console.log(mult1)
let maiorValor = minji.reduce(function(acc,e){
    return (acc>e)?acc:e
})
//console.log(maiorValor)
let hyein = [2,3,4]
potencia = hyein.reduceRight(function(acc, e){
    return Math.pow(e, acc)
})
//console.log(potencia)
let bernice = [2,3,4]
//console.log(bernice.indexOf(3))
bernice.splice(1,2,"a","b",3)
//console.log(bernice)
//console.log(bernice.lastIndexOf(3))