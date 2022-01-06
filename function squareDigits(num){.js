function squareDigits(num)
{
    let originalNumberStringed = num.toString()
    let finalNumber =1
    let i=0
    let array = []
    
    for (i=0 ; i<originalNumberStringed.length; i++)
    {
      let multipliedNumber = originalNumberStringed[i]*originalNumberStringed[i]
      let stringedMultipliedNumber = multipliedNumber.toString()
      array.push(stringedMultipliedNumber)
      multipliedNumber+=multipliedNumber
      finalNumber=finalNumber+finalNumber
   
    }


    let newArray = array.join('')
    
    let parsedInt=parseInt(newArray)
  

      return parsedInt
    }
    
    let result = squareDigits(832947)
    console.log(`this is the result ${result}`)
