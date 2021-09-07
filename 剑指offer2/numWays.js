
//动态规划
var numWays = function (n) {
    const array = [1,1];
    if(n<2){
        return array[n]
    }
    for (let i = 2; i <=n; i++) {
        array[n] = (array[i-1] + array[i - 2])%1000000007
    }
    return array[n]
};

console.log(numWays(7))