class Queues{
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    enqueue(element){
        this.items[this.count] = element
        this.count++
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString(){
        if(this.isEmpty()){
            return undefined
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
const queue = new Queues
/*console.log(queue.isEmpty())
queue.enqueue('Jonh')
queue.enqueue('Jack')
queue.enqueue('Camila')
console.log(queue.toString())
console.log(queue.peek())
console.log(queue.size())
queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty())
console.log(queue.toString())*/
class Deque {
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items  = {}
    }
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element)
        } else if(this.lowestCount > 0){
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1]
            }
        }
        this.count++
        this.lowestCount = 0
        this.items[0] = element
    }
    addBack(element){
        this.items[this.count] = element
        this.count++
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    peekBack(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    toString(){
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
}
const deque = new Deque();
console.log(deque.isEmpty()); // exibe true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John,Jack
deque.addBack('Camila');
console.log(deque.toString()); // John,Jack,Camila
console.log(deque.size()); // exibe 3
console.log(deque.isEmpty()); // exibe false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack,Camila
deque.removeBack(); // Camila decide sair
console.log(deque.toString()); // Jack
deque.addFront('John'); // John retorna para pedir uma informação
console.log(deque.toString()); // John,Jack
function hotPotato(elementsList, num){
    const queue = new Queues()
    const elimitatedList = []
    for(let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i])
    }
    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() 
    }
}
function palindromeChecker(aString){
    if(aString === null || aString === undefined || aString !== null && aString.length === 0){
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split('').join("")
    let isEqual = true
    let firstChar, lastChar;
    for(let i  = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i))
    }
    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !== isEqual){
            isEqual = false
        }
    }
    return isEqual
}
