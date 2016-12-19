console.time();
var palindrome = 0;
for(var i=100; i<=999; i++)
  for(var j=100; j<=999; j++)
    if((''+i*j).split('').reverse().join('')==(''+i*j))
      palindrome = Math.max(palindrome,i*j);
console.timeEnd();