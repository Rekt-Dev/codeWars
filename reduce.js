const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue * currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 55));
// expected output: 15