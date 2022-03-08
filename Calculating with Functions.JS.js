/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
function one(){
    return 1
}

function two(){
    return 2
}

function three(){
    return 3
}

function four(){
    return 4
}

function five(){
    return 5
}

function six(){
    return 6
}

function seven(){
    return 7
}

function eight(){
    return 8
}

function nine(){
    return 9
}

function ten(){
    return 10
}


function  times (timesValue,otherValue) {
    return timesValue*otherValue
}

function dividedBy(a,b){
    return a/b
} 

function plus(c,d){
    return c+d
}

function minus(e,f){
    return e-f
}

let result =  times (nine, eight)
console.log(result)


 console.log( `this is seven times five ${ seven( times   (   five() ) )}`)

console.log("------------------------------------------------")

 let aaaa = 2;

console.log(aaaa *= 3);
// expected output: 6

console.log(aaaa *= 'hello');
// expected output: NaN

let outputCalc = 