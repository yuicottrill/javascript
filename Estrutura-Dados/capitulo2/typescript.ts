let nome: string = "Pedrin";
let número: number = 2;
let typeLanguage: string;
let langs = ["JavaScript", "Ruby", "C", "C#", "C++"]
typeLanguage = langs[0]
//console.log(typeLanguage)
interface Person{
    name: string
    age: number
}
function printName(person:Person){
    console.log(person.name)
}
const joseph = {name:'joseph', age:2}
printName(joseph)