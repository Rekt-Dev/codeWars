function oddOrEven(array) {
    let sum = 0
      for (let i=0;i<array.length;i++){

        if (i+1!=undefined && i+1!=NaN){

           sum +=  array[i]

      }
        }
                let remainder = sum%2
                console.log(remainder)
        let answer =""
        
        if(sum%2===0){

             answer = "even"}

            else  {answer = "odd"}

                    return answer
}


let result = oddOrEven([0,4,7,8,12,134])
console.log(result)