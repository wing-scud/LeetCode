/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <4) {
        return n-1;
    }
    let max=1;
    while(n>4){
         n-=3;
         max=max*3%1000000007;
    }
    return max*n%1000000007;
};
//36
console.log(cuttingRope(120))