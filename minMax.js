
function minMax(arr){
    
  
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    console.log(arr)
    
    
    return [min,max] ; 
}