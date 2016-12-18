console.time();
var n = 600851475143;
for(var i = Math.floor(Math.sqrt(n)); i > 1; i--)
  if(n%i==0)
  {
    var prime = true;
    for(var j = Math.floor(Math.sqrt(i)); j > 1; j--)
      if(i%j==0)
        prime = false;
    if(prime)
    {
      console.log(i);
  console.timeEnd();
      break;
    }
  }