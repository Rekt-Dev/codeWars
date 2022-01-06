function list(names){
    let outputString = ''
    let namesArray=[]
    let newArray = []
     names.forEach(element => namesArray.push(element.name));

// now run a loop on the new array with out the object properties to put the names in an outputstring to be returned to the caller / user 

     if (namesArray.length>2){
for (i=0;i<=namesArray.length;i++){
        newArray.push(namesArray[i])

        //if u have reached the last 2 names, add an & between the two last names
        if(i=1){
        outputString=outputString+' , '
        }
        if (newArray.length-i===1){
outputString=outputString+' & ' + `${newArray[newArray.length-1]}`
        }


        else {
outputString=outputString +` ${newArray[i]}  `

        }
        console.log(`this is namesArray ${namesArray}`)

        console.log(`this is newArray ${newArray}`)
      console.log(`this is outputString: ${outputString}`)
     // return outputString



}
else if (namesArray.length<=2){

        outputString=`${namesArray[0]} & ${namesArray[1]}`}
    
        console.log(`this is outputString: ${outputString}`)

        
       console.log(`this is namesArray: ${namesArray}`)

    return outputString

}

let result= list ([{name:'Bart'},{name:'Lisa'},{name:'Joseph'},{name:'Loren'},{name:'Liza'},{name:'josephina'},{name:'Liza'},{name:'Liklljklza'},{name:'Ljhjhgjhiza'},{name:'Liasdasdza'},])
console.log(`this is the result of the function: ${result}`)