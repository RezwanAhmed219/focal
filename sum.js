const args = process.argv.slice(2);

const sum = function(inputArr) {
  let result = 0;
  
  for (const num of inputArr) {
    result += Number(num);
  }
  return result;

};

console.log(sum(args));


