function stray(numbers) {


for (let i=0;i<numbers.length;i++){
        let sameNumCounter = 0 
        if (numbers[i]===numbers[i+1]){
            sameNumCounter++
        }

          
        
        if(sameNumCounter>=2){
        if(numbers[i]!=numbers[i+1]){
                    return numbers[i+1]

            }
        // weve proven that this is the "normal" number
        // meaning the only other number in existence in the array is the output to return 
// 1. compare the first two elements. 2. if they are the same, compare every subsequent element against the first one, first mismatch is stray 3. if they aren't the same, compare first and third => equal => 2nd element is stray, not equal => 1st is stray – 

}
    
  return numbers;
}


let result = stray([12,2,2,2,2,2,2,2,2])
console.log(result)