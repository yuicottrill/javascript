/*for (i = 0; i < a.length; a[i++] = 0){
    console.log(i)
}
for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++,j--) console.log(i*j);
for(var i in o) console.log(i);

function hipotenusa(x, y){
    return Math.sqrt(x*x + y*y)

function factorial(n){
    if (n <= 1) return 1;
    return n * factorial(n - 1)
}
var n = 2
if (n == 1){
    console.log(`Você tem 1 nova mensagem`)
} else{
    console.log(`Você tem ${n} mensagens`)
}
var lista = {x:1, y:2, z:3}
var a = [], i = 0
for (a[i++] in lista){
    console.log(a)
}
for (i = 0; i < data.length; i++){
    if (!data[i]) continue
    total += data[i]
}
function square(x){
    return x*x;
}
console.log(square(2))
function factorial(x){
    if (x < 0) throw new Error('O valor é negativo')
    for (var f = 1; x > 1; f *= x, x--)
    return f
}
console.log(factorial(2))*/
function divide(a, b){
    try{
        if ( b === 0){
            throw new Error('Não é possível dividir por 0')
        }
        return a/b
    } catch (error){
        console.error('Erro', error.message)
    } finally{
        console.log('Operação concluida')
    }
}
console.log(divide(10, 0))