function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}