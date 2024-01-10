/*var x = 2
var square = function(x) { return x * x}
console.log(square)
*/
let objeto = {x:1, y:{z:3}}
let composta = [objeto,4,[5,6]]
/*console.log(objeto.y.z) // Eu estou acessando no meu objeto através da propriedade, o valor de z que contém em y */
/*console.log(objeto["x"])
console.log(composta[1])
console.log(composta[2]["1"])
console.log(composta[0].x)*/
/*let i = 1, j = ++i
console.log(i, j)*/
//let i = 1, j = i++
//console.log(i, j)
/*var geval = eval;
var x = "global", y = "global";
function f(){
    var x = "local"
    eval("x += 'changed'; ");
    return x 
}
function g(){
    var y = "local"
    geval("y += 'changed'; ");
    return y
}
console.log(f(), x)
console.log(g(), y)*/
for(var i=0, j=10; i < j; i++, j--){
    console.log(i+j)
}