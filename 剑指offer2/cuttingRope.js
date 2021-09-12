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
         max*=3;
         n-=3;
    }
    return max*n;
};
//36
console.log(cuttingRope(10))