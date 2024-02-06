/*class Carro{ // Classe Pai
    constructor(marca, portas, tipo){
        this.marca = marca
        this.portas = portas
        this.tipo = tipo
        this.ligado  = false
        this.vel = 0
        this.cor = undefined
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    setCor(cor){
        this.cor = cor
    }

}

class Militar extends Carro{ // Herdando métodos e propriedades da Classe Pai
    constructor(marca, portas, tipo, blindagem, municao){
        super(marca, portas,tipo) // Super chama algo da Classe Pai
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar(){
        if(this.municao > 0){
            this.municao--
            console.log(`Restam ${this.municao} munições`)
        } else{
            console.log(`Você NÃO tem munição`)
        }
    }
}
const forcaMilitar = new Militar("Blindado",4,"Fortificado","Sim",5)
forcaMilitar.ligar
forcaMilitar.atirar()
forcaMilitar.atirar()
forcaMilitar.atirar()
forcaMilitar.atirar()
forcaMilitar.atirar()
forcaMilitar.atirar()
forcaMilitar.ligar()
forcaMilitar.cor = "Verde"
console.log(forcaMilitar.cor)
console.log(forcaMilitar.tipo)
console.log(forcaMilitar.ligado)
*/

class Comum{
    constructor(){
        if(this.constructor===Comum){
            throw new TypeError("Essa classe NÃO pode ser instanciada")
        }
        this.rodas = 4
        this.door = 4
        this.on = false
    }
}
let vrumVrum = new Comum()
class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax = 120
            this.nome = "Normal" 
        }else if(tipo==2){
            this.velMax = 160
            this.nome = "Esportivo"
        }else if(tipo==3){
            this.velMax = 200
            this.nome = "Super-Esportivo"
        }
        this.velMax += this.turbo.potencia
    }
    info(){
        console.log(`${this.nome}`)
        console.log(`${this.velMax}`)
        console.log(`${this.turbo.potencia}`)
        console.log("-".repeat(30))
    }
}
class Turbo{
    constructor(e){
        if(e==0){
            this.potencia = 0
        }else if(e==1){
            this.potencia = 50
        }else if(e==2){
            this.potencia = 75
        }else if(e==3){
            this.potencia =  100
            
        }
    }
}
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.velMax = 300 + this.turbo.potencia
        this.nome = "Carro especial"
    }
    info(){
        console.log(`${this.nome}`)
        console.log(`${this.velMax}`)
        console.log(`${this.turbo.potencia}`)
        console.log("-".repeat(30))
    }
}
let car = new Carro(1,2)
let carTwo = new Carro(2,3)
let carThree = new CarroEspecial(2)
car.info()
carTwo.info()
carThree.info()

