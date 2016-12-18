console.time();
function checkIfPrime( prime, count ) {
  if( count >= prime ) {
    largestPrimeFactor = prime;
  }

  if( prime % count === 0 ) {
    return;
  }

  checkIfPrime( prime, count+=2 );
}

function findLargestPrime( num ) {
  var numSqrt = Math.ceil( Math.sqrt( num ) );

  if( numSqrt % 2 === 0 ) {
    numSqrt--;
  }

  for( var i = numSqrt; !largestPrimeFactor; i-=2 ) {
    if( num % i === 0 ) {
      checkIfPrime( i, 3 );
    }
  }
  console.timeEnd();
  return largestPrimeFactor;
}

var largestPrimeFactor;

console.log(
  findLargestPrime( 600851475143 )
);
