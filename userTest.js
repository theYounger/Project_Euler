function smallestMultiple() {
  const min = 1, max = 20;
  let result = 1;

  for (var i = min; i <= max; i++) {
    splitIntoPrimeMultipliers(i, 2).forEach((number) => {
      if (result % number === 0) result /= number;
    });

    result *= i;
  }

  return result;
}

function splitIntoPrimeMultipliers(num, from, result) {
  result = result || [];
  from = from > 1 ? from : 2;

  for (let i = from; i <= num; i++) {
    if (num % i === 0) {
      result.push(i)
      return splitIntoPrimeMultipliers(num / i, i, result);
    }
  }

  return result;
}
console.time();
console.log(smallestMultiple());
console.timeEnd();