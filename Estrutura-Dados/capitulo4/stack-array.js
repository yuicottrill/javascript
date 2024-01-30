class Stack1{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
         this.items = []
    }
}
const pilha = new Stack1()
//console.log(pilha.isEmpty())
pilha.push(5)
pilha.push(8)
pilha.push(11)
//console.log(pilha.peek())
//console.log(pilha.size())
//console.log(pilha.isEmpty())
pilha.push(15)
pilha.pop()
pilha.pop()
//console.log(pilha.size())
//Recriando class para objeto
class Stack{
    constructor(){
        this.count = 0 // para manter controle
        this.items = {}
    }
    // métodos
    push(element){
        this.items[this.count] = element
        this.count++
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0
    }
    pop(){
        if(this.isEmpty()){
            return undefined;;
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
const stack = new Stack()
stack.push(5)
stack.push(8)
// console.log(Object.getOwnPropertyNames(stack))
// console.log(Object.keys(stack))
// console.log(stack.items)
const _items = Symbol('stackItems');
class pilhaTeste {
    constructor(){
        this[_items] = []
    }
}
const items = new WeakMap()
class pilhaPrivada {
    constructor(){
        items.set(this,[])
    }
    push(element){
            const s = items.get(this); // {3}
            s.push(element);
        }
        pop(){
            const s = items.get(this);
            const r = s.pop();
            return r;
        }
        //outrs métodos
}
function decimalToBinary(decNumber){
    const remStack = new Stack1;
    let number = decNumber;
    let rem;
    let binaryString = '';
    while( number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number/2)
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString()
    }
    return binaryString
};
console.log(decimalToBinary(23))