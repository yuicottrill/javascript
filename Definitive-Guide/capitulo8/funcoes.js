function chamadaNewjeans(){
    for(let a = 0; a < 5; a++)
    console.log("Newjeans")
}
//chamadaNewjeans()
function distancia(x1,y1,x2,y){
    var dx = x2 - x1
    var dy = y2 - y1
    return Math.sqrt(dx*dx + dy*dy)
}
function fatorial(x){
    if (x <= 1) return 1
    return x*fatorial(x-1)
}
//console.log(fatorial(5))
//anilhadas
function hipotenusa(a,b){
    function quadrado(x){return x*x}
    return Math.sqrt(quadrado(a) + quadrado(b))
}
//console.log(hipotenusa(3,4))
let calculador = {
    operador1: 1,
    operador2: 2,
    soma: function(){
        this.resultado = this.operador1 + this.operador2
    }
}
calculador.soma()
//console.log(calculador.resultado)
let multiplicador = {
    multplicação: function(number1, number2){
        this.resultado = number1 * number2

    }
}
multiplicador.multplicação(2,3)
//console.log(multiplicador.resultado)
function f(x, y, z){
    if (arguments.length != 3)
    throw new Error()
}
function f(x){
    console.log(x)
    arguments[0] = null
    console.log(x)
}
function calcularAreaDoTriangulo(args){
    return args.altura * args.largura
}
let resultado = {altura:5, largura:6}
let area = calcularAreaDoTriangulo(resultado)
//console.log(area)
function isArrayLike(obj) {
    return obj != null && typeof obj.length === 'number' && obj.length >= 0;
}
function sum(a){
    if (isArrayLike(a)){
            let total = 0;
            for(var i = 0; i < a.length; i++){
            let element = a[i];
            if(element == null) continue;
            if(isFinite(element)) total += element
            else throw Error("sum(): os elementos nao sao infinitoss")
        }
        return total
    }
    else throw new Error("sum(): argumentos não são um array")
}
let variosNumeros = [2,3,4,5, null, 10]
//console.log(sum(variosNumeros))
uniqueInteger.counter = 0
function uniqueInteger(){
    return uniqueInteger.counter++
}
uniqueInteger()
//console.log(uniqueInteger.counter)
let global = "Eu sou global"
function exterior(){
    let global = "Eu sou Local"
    function interior(){ return global}
    return interior()
}
const rato = exterior()
//console.log(rato)
var scope = "Escopo Global"
function checkscope(){
    var scope = "Escopo Local"
    function f(){return scope}
    return f()
}
function contador(){
    let count = 0
    return {
        add: function(){return count++},
        reset: function(){return count = 0},
        getCount: function(){return count}
    }
}
let c = contador(), d = contador()
c.add()
c.add()
c.add()
//console.log(c.getCount())
d.add()
//console.log(d.getCount())
d.reset()
//console.log(d.getCount())
function constFunction(v){
    return function(){return v}
}
let funcs = []
for(let i = 0; i < 10; i++) funcs[i] = constFunction(i)
//console.log(funcs[4]())
function check (args){
    let atual = args.length
    let esperado = args.callee.length
    if( atual !== esperado){
        throw new Error ('São diferente')
    }
}
function exemplo(a,b,c){
    check(arguments)
    return a + b + c
}
//console.log(exemplo(2,3,5))
function f(y){return this.x + y}
let o = {x:1}
let g = f.bind(o)
//console.log(g(4))
let novaFuncao = new Function("x", "y", "return x*y")