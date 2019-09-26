// TODO: Sum the numbers from 1 to 10
// keyword - expression in parentheses - {}
// Function Expression - we specify name parameters which are assigned values based on arguments that we pass upon invocation
function numberSummer(start, end) {
  let sum = 0;
  for(let i = start; i <= end; i += 1) {
  sum += i;
}
console.log(sum);

return sum;
}

console.log(numberSummer(1,10));


// for(let i = 1; i <= 10; i += 1) {
// sum += i;
// }

// console.log(sum);
