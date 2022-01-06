


function sortArray(array) {

    let oddArray=[]
        for (i=0;i<array.length;i++)
        {     
          //find if the number is odd or even
            if(array[i]%2!==0){
                //if its odd, push to new array
                oddArray.push(array[i])

            }
        }
        console.log(`this is odd array ${oddArray}`)

               /*  console.log(array.length)
                console.log(i)
                console.log(`this is array [i] ${array[i]}`)
             */
            
            let sortedOddArray = []


                    //loop through the odd array to math max it out to the last final array of odds

            for (j=0;j<oddArray.length;j++){
                    let minOddNumber = Math.min(...oddArray);

                    console.log(`this is minOddNumber ${minOddNumber}`)

                    sortedOddArray.push(minOddNumber)
                     console.log(`this is sortedOddArray ${sortedOddArray}`)

            }
              //  return sortedOddArray

        


let answer = sortArray([3,8,13,45,6,5,45,78,54,33,25,679,4])
console.log(answer)