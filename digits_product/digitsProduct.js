function digitsProduct(product)
{
    if(product === 0) return 10;
    if(product === 1) return 1;
    let ans = 0;
    for(let i = 9; i >= 2; --i){
        while(product % i === 0){ 
            ans = ans*10 + i;
            product /= i; 
        } 
    }
    let ans2 = 0;
    while(ans  > 0){
        ans2*=10;
        ans2+=ans%10;
        ans = Math.floor(ans/10);
    }
    return product === 1  ? ans2 : -1;
};

console.log(digitsProduct(19));

module.exports = digitsProduct;
