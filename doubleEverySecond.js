function doubleEveryOther(a) {
   var modified = a.slice(0); // copy the whole `a`
   for(var i = 1; i < modified.length; i+=2) {
      modified[i] *= 2; // replace the value at `i`, for every other number.
      console.log(`this is i --> ${i}`)
      console.log(`this is modified ${modified}`)
   }
   return modified;
}
 
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b = doubleEveryOther(a);

console.log(`this is json stringify b --> ${JSON.stringify(b)}`);
console.log(`this is b --> ${b}`);

//let result =doubleEveryOther()