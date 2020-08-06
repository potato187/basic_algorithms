function pagesNumbering(number){
  let k = 1,
  v1 = 0,
  v2 = 0,
  m = ('' + number).length;
  if(number < 10 && number > 0){
    return number;
  }

  for(let i = 1; i <= m - 1; i++){
    v1 = (number - Math.pow(10, i) + 1)*m;
    v2 = v2 + (9 * i) * k;
    k *= 10;
  }

  return v1 + v2;
};

module.exports = pagesNumbering;