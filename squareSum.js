function squareSum(numbers){

      const nums = numbers.map(x=>x*x)
      const numsSum = nums.map(y=>y+y)
      return numsSum
  
}

const result = squareSum([1, 2, 2])
console.log(result)