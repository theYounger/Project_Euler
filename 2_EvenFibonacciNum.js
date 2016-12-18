function evenFibNum( num1, num2 ) {
  var num3 = num1 + num2;

  if( num3 > 4000000 ) {
    return 0;
  }

  if( num3 % 2 === 0 ) {
    total += num3;
    evenFibNum( num2, num3 );
  } else {
    evenFibNum( num2, num3 );
  }
}

var total = 2;

evenFibNum( 1, 2 ); return total;
