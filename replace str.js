
const str = 'this is filthy';


/*console.log(str.substr(0,4));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"a



console.log(str.slice(1,3));
// expected output: "the lazy dog."

console.log(str.slice(4, 9));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
S


const p = 'this is filthy';

console.log(p.replace( 'hitler'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /i/i;

    
    let replacedP= p.replace(regex, '')
    console.log(replacedP)
let replacedPp=replacedP.replace(regex,'')
console.log(replacedPp)
let replacedPpp=replacedPp.replace(regex,'')

console.log(replacedPpp)

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }
  
  new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
    .forEach(logMapElements);
  */
function sup(str){
    const array = [`this`,`is`,`filthy`];
    let vowelArray = ['a','A','e','E','i','I','o','O','u','U']
let words = 'this is filthy'


     words = str.split(' ');
console.log(`this is the str split of the input ${words}`)



array.forEach(element => console.log(element));
vowelArray.forEach(element => console.log(element));

}

let answer = sup('this is filthy')

console.log(answer)