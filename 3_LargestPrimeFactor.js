function checkLargestPrime( num ) {
  function checkFactor( prime, count ) {
    if( count >= prime ) {
      largestPrimeFactor = prime;
      return found = true;
    }

    if( prime % count === 0 ) {
      return;
    }

    checkFactor( prime, count += 2 );
  }

  var largestPrimeFactor;
  var primeSquareRoot;
  var forStart = Math.ceil( Math.sqrt( num ) );
  var found = false;

  if( forStart % 2 === 0 ) {
    forStart--;
  }
  console.log(forStart, "forStart");

  for( var i = forStart; !found; i -= 2 ) {
    console.log(i, "i");
    if( num % i === 0 ) {
      checkFactor( i, 3 );
    }
  }

  return largestPrimeFactor;
}
console.log(
  checkLargestPrime( 3 )
);
