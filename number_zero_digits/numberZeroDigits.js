function numberZeroDigits (product){
  if(product < 2) return 0;
  let d = 0, k = 5;
  while(k <= product){
    d += Math.floor(product/k);
    k *= 5;
  }
  return d;
}

module.exports = numberZeroDigits;