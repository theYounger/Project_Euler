function sumOfSquares(num) {
  var sum = 0;

  for(let i = 1; i <= num; i++) {
    sum += i * i;
  }
  return sum;
}

function squareOfSums(num) {
  var sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum * sum;
}

return squareOfSums(100) - sumOfSquares(100);
