function primeSum(number){
  let numbers = [], sum = 0;
  for(let i = 2; i <= number; i++){
    numbers[i] = true;
  }

  for(let i = 2; i <= number; i++){
    for(let j = 2; j <= number; j++){
        if(i*j <= number) numbers[i*j] = false;
    }
  }

  for(let i = 2; i <= number; i++){
    sum += numbers[i] === true ? i : 0;
  }

  return sum;
}

module.exports = primeSum;