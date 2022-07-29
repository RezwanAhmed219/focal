const input = process.argv[2];

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(input));