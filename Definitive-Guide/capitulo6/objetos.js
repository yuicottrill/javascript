/*Object.prototype
var o1 = Object.create({x:1, y:2})
function inherit(p){
    if (p == null) throw TypeError()
    if (Object.create){
        return Object.create(p)
    }
    var t = typeof p
    
    if (t !== "object" && t !== "function") throw TypeError()
    function f() {}
    f.prototype = p
    return new f()
}
var o = {x:"Isso não tem valor"}
library_function(inherit(o))

function marca(tipo, preço, quantidade){
    this.tipo = tipo
    this.preço = preço
    this.quantidade = quantidade
    this.ligar = function(){
        console.log("Ligando...")
    }
}

const compra = new marca("Samsung", "1500", "2")
const compra2 = new marca("Apple", "5400", "1")
console.log(compra)
console.log(compra2)
compra.ligar()
const o = {x:1, y:2, z:3}
for (p in o){
    console.log(o)
}
var o =  {x:1, y:2}.toString()

const data = new Date()
const valorNumerico = data.valueOf
console.log(valorNumerico)

const exemplo = { chave: 'valor' };
console.log(exemplo.toString());*/
