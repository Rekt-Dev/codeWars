function grow(x){

    return x.reduce((a,b) => a*b)
    
}

const  result=grow([1, 2, 3, 4])
console.log(result)