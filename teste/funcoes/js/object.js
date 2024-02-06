class Carro{
    constructor(nome, tipo){
        this.marca = nome
        if(tipo == 1){
            this.type = "Esportivo"
            this.velocity = 300
        }else if(tipo == 2){
            this.type ="Utilitário"
            this.velocity = 160
        }else if(tipo == 3){
            this.type ="Passeio"
            this.velocity = 100
        }else{
            this.type = "Militar"
            this.velocity = 180
        }
    }
    getName(){
        return this.marca 
    }
    getType(){
        return this.type
    }
    getVel(){
        return this.velocity
    }
    setName(name){
        this.marca = name
    }
    setType(type){
        this.type = type
    }
    setVel(vel){
        this.velocity = vel
    }
    info(){
        console.log(this.marca)
        console.log(this.type)
        console.log(this.velocity)
    }
}
const carro1 = new Carro("Mustang", 2)
//carro1.info()
//console.log(carro1)
console.log(carro1.getName())
carro1.setName("Palio")
console.log(carro1.marca)