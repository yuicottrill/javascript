var num = 1;
num = 2 // atualizado
var stri = 'Oi';
var valorVerdadeiro = true;
var nullValue = null;
var empty;
/*console.log('num: ' + num)
if( num === 1){
    console.log('num é igual a 1')
} else{
    console.log(`num é diferente de 1, é igual a ${num}`)
}
//operador térnario
num === 1 ? console.log('num é igual a 1'): console.log(`num não é 1`);
var moth = 2
switch(moth){
    console.log('Janeiro')
    case 1:
        break
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log()
        break
    case 4:
        console.log()
        break
    case 5:
        console.log()
        break
    case 6:
        console.log()
        break
    case 7:
        console.log()
        break
    case 8:
        console.log()
        break
    case 9:
        console.log()
        break
    case 10:
        console.log()
        break
    case 11:
        console.log()
        break
    case 12:
        console.log()
        break
}
let array = ["Amor","Paixão","Namoro","Casamento","Bong-Bong"]
for (let i = 0; i < array.length; i++){
    console.log(`no índice ${i} possui: ${array[i]}`)
}*/
function sayHello(){
    console.log("Olá")
}
//sayHello()
function output(num1, num2){
    return num1 + num2
}
console.log(output(1,2))
let obj = {
    nome: {
        first: "Yui",
        last: "Pham"
    },
    address: "Brasil"
};
function Book(nome,pagina, autor){
    this.nome = nome
    this.pagina = pagina 
    this.autor = autor
}