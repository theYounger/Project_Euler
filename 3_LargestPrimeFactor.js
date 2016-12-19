function findLargestPrime( num ) {
  function checkIfPrime( prime, count ) {
    if( count >= prime ) {
      largestPrimeFactor = prime;
    }

    if( prime % count === 0 ) {
      return;
    }

    checkIfPrime( prime, count+=2 );
  }

  var largestPrimeFactor;
  var numSqrt = Math.ceil( Math.sqrt( num ) );

  if( numSqrt % 2 === 0 ) {
    numSqrt--;
  }

  for( var i = numSqrt; !largestPrimeFactor; i-=2 ) {
    if( num % i === 0 ) {
      checkIfPrime( i, 3 );
    }
  }

  return largestPrimeFactor;
}

findLargestPrime( 600851475143 );
