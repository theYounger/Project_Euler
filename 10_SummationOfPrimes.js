function sumPrimes(upperLimit) {
  const primeArray = [2];
  let isPrime = true;

  for(let i = 3; i < upperLimit; i+=2) {
    for(let j = 1; primeArray[j] <= Math.sqrt(i); j++) {
      if(i % primeArray[j] === 0) {
        isPrime = false;
      }
    }
    if(isPrime) {
      primeArray.push(i);
    } else {
      isPrime = true;
    }
  }

  return primeArray.reduce(function reduceToSum(a, b) {
    return a + b;
  });
}

return sumPrimes(2000000);
