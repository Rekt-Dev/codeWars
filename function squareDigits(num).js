function squareDigits(num)
{
let originalNumberStringed = num.toString()
let finalNumber =1
let i=0
let array = []

for (i=0 ; i<originalNumberStringed.length; i++)
{
  console.log(`this is i ${i}`)
  let multipliedNumber = originalNumberStringed[i]*originalNumberStringed[i]
  let stringedMultipliedNumber = multipliedNumber.toString()
  array.push(stringedMultipliedNumber)
  multipliedNumber+=multipliedNumber
  finalNumber+=finalNumber
}


let stringedArray = array.toString
  console.log(`this is num[i] ${num[i]}`)
  console.log(`this is multipliedNumber ${multipliedNumber}`)
console.log(`this is array ${array}`)
console.log(`this is final number ${finalNumber}`)


  return finalNumber;

}
let result = squareDigits(83294)
console.log(`this is the result ${result}`)