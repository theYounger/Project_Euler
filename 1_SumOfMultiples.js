function multipleOf( factor, count ) {
  var multiple = count * factor;

  if( multiple < 1000 ) {
    return multiple + multipleOf( factor, ++count );
  } else {
    return 0;
  }
}

return multipleOf( 3, 1 ) + multipleOf( 5, 1 ) - multipleOf(15, 1);
