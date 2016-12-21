function pythagoreanTripletGen(num) {
  const upperLimit = Math.sqrt(num/2);

  for(let i = 0; i < upperLimit; i++) {
    for(let j = 0; j < upperLimit; j++) {
      if(i * (i + j) === num/2) {
        const a = (i * i) - (j * j);
        const b = 2 * i * j;
        const c = (i * i) + (j * j);
        return a * b * c;
      }
    }
  }
}

return pythagoreanTripletGen(1000);