/*var framework = "Angular"
var framework = "React"
//console.log(framework) // React
let linguagem = "JavaScript"
//let linguagem = "Ruby" // ERRO!
//console.log(linguagem)  
const pi = 3.14 // Pi é uma constante
//pi = 3 // isso não é possível 
//console.log(pi)
const jsFramework = {
    nome: "Electron"
}
jsFramework.nome = "Angular" // isso funciona.
//console.log(jsFramework.nome)
let movie = 'Lord of the Rings'; 
//var movie = 'Batman v Superman'; // erro, movie já foi declarada
/*function starWarsFan() {
const movie = 'Star Wars';
return movie;
}
function marvelFan() {
movie = 'The Avengers';
return movie;
}
function blizzardFan() {
const isFan = true;
let phrase = 'Warcraft';
console.log('Before if: ' + phrase);
if (isFan) {
let phrase = 'initial text';
phrase = 'For the Horde!';
console.log('Inside if: ' + phrase);
}
phrase = 'For the Alliance!';
console.log('After if: ' + phrase);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan()); 
console.log(movie); 
blizzardFan(); 
const book = {
    nome: "Game of thrones"
}
//console.log(`o livro ${book.nome} é muito interessante.`)
var circuloAreaES5 = function circuloArea(r){
    var pi = 3.14
    return pi*r*r
}
//console.log(circuloAreaES5(2))
const circleArea = r  => {
    const Pi = 3.14
    const area = Pi*r*r
    return area
} 
//console.log(circleArea(3))
function padrao(x=1 , y=2, z=3){
    return x+y+z
}
//console.log(padrao(10,5))
function porPadraoE5(x,y,z){
    if(x === undefined) x = 1;
    if(y === undefined) y = 2;
    if(z === undefined) z = 3;
    return x + y + z
}
function sum() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0]: 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
 }
 let params = [3,4,5]
 //console.log(sum(...params))*/
{
    let [x, y] = ["a", "b"];
    [x, y] = [y, x];
    console.log(x, y);
  }
const Hello = {
    nome: Yui,
    Hello(){
        console.log("Olá")
    }
}
const Ola = {
    nome: abcde,
    printHello: function(){
        console.log("Hello")
    }
}
class book{
    constructor(titles, pages, isbn){
    this.titles = titles,
    this.pages = pages,
    this.isbn = isbn
    }
    printIsbn(){
    console.log(this.isbn);
    }
}
class Pessoa {
    constructor(nome){
        this._nome = nome
    }
    get nome(){
        return this._nome
    }
    set nome(value){
        this._nome = value
    }
}
let pessoaA = new Pessoa("Among US")
