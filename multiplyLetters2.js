function accum(s) {
  let split= s.split('')
  let map = split.map((c,idx) => c.toUpperCase() +Array(idx+1).join(c.toLowerCase()) ).join('-')
console.log(`this is map ${map}`)    
console.log(`this is split ${split}`)    
}
  //return 
    
    /*     s.split('')
             .map((c, idx)
                    =>
                        c.toUpperCase() + Array(idx + 1)
                                                   .join(c.toLowerCase())
                                                                       ).join('-');
  } */


  let result = accum(`this is the test text`)
  console.log(result)

  /* const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(x => x * 4);
  
  console.log(map1);

  const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(' * '));

console.log(elements.join(' - '));

console.log(elements.join('  '));



let joseph = elements.join('       ')
let string = "                                bleh bro bleh      fkn    bleh                                                        "
console.log(`this is joseph pre trimmed ${joseph}`)
joseph = joseph.trim()
//console.log(`this is trimmed ${trimmed}`)
console.log(`this is joseph post trimmed ${joseph}`)

console.log(string)
let trimmmmmmmmmmmmmmmeeeeeeed = string.trim()
console.log(`this is trimmeeeeeeeeeeeeeeeeeeeeeeeeedddd ${trimmmmmmmmmmmmmmmeeeeeeed}`)
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'



let stringedAf = string.split('\n ')

console.log(`this is stringedAf PreTrim ${stringedAf}`)
let strings= string.trim()
console.log(`this is stringedAf posTrim ${strings}`)

let sum  = parseInt(4.32 +4.56)
let summest = sum +sum 
console.log(summest)
console.log(sum) */