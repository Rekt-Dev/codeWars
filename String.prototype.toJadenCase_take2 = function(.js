String.prototype.toJadenCase = function() {
  var result = this;

  //split the string into words
  if (this.length !== 0) {
    result = this.split(" ").map(function(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
    console.log(`this is this: = ${this}`)
    console.log(`this is result: = ${result}`)

 console.log  ( "this is the test string".substring(0, 8, 1))

  }

  return result;
};
console.log("this is a test".toJadenCase());
console.log("oneword".toJadenCase());
console.log("blank: " + ("".toJadenCase()));
console.log(this)