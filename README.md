# Project_Euler
My solutions for the problems presented by Project Euler @ https://projecteuler.net/

### Problem 3: Find the Largest Prime Factor
https://projecteuler.net/problem=3
####The prime factors of 13195 are 5, 7, 13 and 29.

####What is the largest prime factor of the number 600851475143 ?

The biggest challenge in Problem #3 was the impossibly enormous scope of the computing task, if such a challenge was to be tackled with the simple algorithmic methods of Problems #1 and #2.

First step was to break down the challenge into a manageable size. 
```javascript
 var numSqrt = Math.ceil( Math.sqrt( num ) );
```
Where *num* is equal to 600851475143. By finding the square root of *num* I am able to find its largest possible factor. This is important. Instead of looping through 600851475143 in search of prime factors, I can loop through its rounded square root, 775147.

The second step was to realize that instead of looping from 0 to whatever terminus in the typical fashion, it's better to start at the square root and work backwards, since we are in fact looking for the largest prime factor. This would cut down the size of the task down enormously.

```javascript
for( var i = numSqrt; !largestPrimeFactor; i-=2 ) {
  if( num % i === 0 ) {
    checkIfPrime( i, 3 );
  }
}
```
The function *checkIfPrime* is a [recursive function](http://www.integralist.co.uk/posts/js-recursion.html) whose task is to determine if said iteration of the for loop is a prime number. *checkIfPrime* looks like this:
```javascript
function checkIfPrime( prime, count ) {
  if( count >= prime ) {
    largestPrimeFactor = prime;
  }

  if( prime % count === 0 ) {
    return;
  }

  checkIfPrime( prime, count+=2 );
}
```

If the number is a prime number it is saved to state. The recursive function is broken out of. And the prime number returned, thereby solving Project Euler's #3 problem.
