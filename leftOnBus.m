 function busStop(busStops){
   let leftOnBus = 0
       
  for (let i=0;i<busStops.length;i++){
    console.log(`this is leftonbus -- > ${leftOnBus}`)
        leftOnBus = busStops[i]-busStops[i+1]  
          leftOnBus+=leftOnBus
            console.log(leftOnBus)
      }
  }

}

let numbered = busStop([[10,0],[3,5],[5,8]]))
console.log(numbered)