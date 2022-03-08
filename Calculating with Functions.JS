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

let one = 1 
let two = 2
let three=3
let four =4
let five= 5 
let six= 6 
let seven=7
let eight=8
let nine=9
let ten = 10

function  times (numa,numb) {
    return numa*numb
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

