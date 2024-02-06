const pessoa = {
    name: "Bruno",
    age: 15,
    city: "São Paulo",
    study: "Inglês",
    lesson:{
        firstLesson: "Phrasal Verbs",
        secondLesson:"Conditionals",
        threeLesson: "Idiomatic Expressions"
        
    }
    
}
const jsonString = '{"name":"Bruno","age":15,"city":"São Paulo","study":"Inglês","lesson":{"firstLesson":"Phrasal Verbs","secondLesson":"Conditionals","threeLesson":"Idiomatic Expressions"}}';
const pessoaObjeto = JSON.parse(jsonString);
const stringJson = JSON.stringify(pessoa)
console.log(pessoa)
console.log(stringJson)
console.log(pessoaObjeto)