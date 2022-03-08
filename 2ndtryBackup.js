function findShort(s){
  
    let  wordsArray = s.split(' ')
    let i=0
    let j=0
    let lengthsArray = []
    let lastArray=[]
    let min =10

    //let parsedLength = parseInt(lengthsArray)
    
for (i=0;i< wordsArray.length;i++){
                lengthsArray.push(wordsArray[i].length)

                for(j=0;j<lengthsArray.length;j++){
                        let x=Number (lengthsArray[j])
                        lastArray.push(x)
                        
                 
        
                }}
                //var min = Math.min.apply(Math, arr)
                let yes  = Math.min.apply(Math, lastArray)
                        console.log(yes)
            
                        return yes

            

    
    }
    let result = findShort('bitcoin   future mofo boomer bruuuuuuuuuuh wat')
    console.log(`this is the functions result--> ${result}`)