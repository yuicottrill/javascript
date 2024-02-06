const getMiddle = (s)=>{
   let tam = s.length
   if(tam%2 == 0){
        let result1 = s[tam/2]
        let result2 = s[(tam/2)-1]
        let recebe = result2 +  result1
        return recebe
   }else{
        let calc = Math.floor(tam/2)
        let result = s[calc]
        return result
   }
}

console.log(getMiddle("test"))