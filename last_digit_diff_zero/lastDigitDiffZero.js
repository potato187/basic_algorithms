let dig = [1, 1, 2, 6, 4, 2, 2, 4, 2, 8];
function lastDigitDiffZero (n) {
  let res = 1;
  for(let i = 2; i <= n; i++){
      res *= i;
      while(res % 10 === 0) {
          res /= 10;
      }
      res = res % 100;
  }

  while(res % 10 === 0){
      res /= 10;
  }

  return res%10;
}

module.exports = lastDigitDiffZero;
