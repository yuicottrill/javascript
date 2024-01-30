const friend = (friends) =>{
    if(Array.isArray(friends)){
        return friends.every(elemento => typeof elemento === 'string' && elemento.length <=4)
    } else{
        if(typeof friends === 'number'){
            return false
        }
    }
}