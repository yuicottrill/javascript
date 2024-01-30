const XO = (str) => {
    const countX = str.toLowerCase().split('x').length - 1;
    const countO = str.toLowerCase().split('o').length - 1;
    return countX === countO;
}
const stringTest = 'Oo';
console.log(XO(stringTest))
console.log(myArray)