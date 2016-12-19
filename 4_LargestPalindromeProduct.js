function findLargestPalindrome(digitQty) {
  function palindromeCheck(element, index, array) {
    return array[index] === array[array.length - 1 - index];
  }

  function largestCheck(element, index, array) {
    return array[this] >= element;
  }

  const palindromeArray = [];
  const nines = Number("9".repeat(digitQty));
  const lowerLimit = nines*(1 - 1/digitQty);

  for(let i = nines; i > lowerLimit; i--) {
    for(let j = nines; j > lowerLimit; j--) {
      const product = i * j;
      const palindrome = product.toString().split("").every(palindromeCheck);
      if(palindrome) palindromeArray.push(Number(product));
    }
  }

  for(let i = 0; i < palindromeArray.length; i++) {
    const largestPalindrome = palindromeArray.every(largestCheck, i);
    if(largestPalindrome) return palindromeArray[i];
  }
}

findLargestPalindrome(3);
