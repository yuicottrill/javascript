/*
var book = {
    topic: 'Javascript', // objetos
    fat: true
}

console.log(book.topic)
book.author = 'Flanagan'
console.log(book.author)
*/

/*
var primos = [2, 3, 5, 7, 11, 13]
console.log(primos[0])          //Aba de arrays
console.log(primos.length)
console.log(primos.length-1) // ultimo elemento do array
primos[6] = 11
primos[5] = 14
console.log(primos)
*/

/*
var x = 2, y = 3;
console.log(y)
*/
/*
function fatorial(n){
    var i, produto = 1
    for (i=2; i <= n; i++)
        produto *= i
    return produto
}
console.log(fatorial(5))
*/
function Point(x, y){
    this.x = x
    this.y = y
}

var p = new Point(1, 1)
Point.prototype.r = function(){
    return Math.sqrt(
        this.x * this.x,  
        this.y * this.y)
}
console.log(p.r())