/* const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array);  */
/* 
let numbers = [1,2,3,4];

for(j=0;j<=numbers.length;j++){
    numbers.pop();
    console.log(numbers);

}

delete the value 3 from the array
let numbers2 = [1,2,3,4];
i = numbers2.indexOf(3);
if(i >= 0) {
   numbers2.splice(i,1);
}
console.log(numbers2); // [1,2,4]


/* let oddMinNumber =0
let numbers3 = [1,2,3,4];
oddMinNumber = Math.min(null,numbers3)
console.log(oddMinNumber)
numbers3 = numbers3.filter((n) => {return n === oddMinNumber});
console.log(numbers3); // [1,2,4]


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
 */


var myArray = [];
var m = Math.min(...myArray);
console.log(m)