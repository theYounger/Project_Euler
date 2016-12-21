function checkIfPrime(element, index, array) {
  return this % element !== 0;
}

const primeArray = [2];
let count = 1;

for(let i = 3; count < 10001; i+=2) {
  var isPrime = primeArray.every(checkIfPrime, i);
  if(isPrime) {
    primeArray.push(i);
    count++;
  }
}

return primeArray[primeArray.length - 1];
