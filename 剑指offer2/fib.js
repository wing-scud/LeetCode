//  斐波那契数列

const map =new Map()
var fib = function (n) {
    if(n===0) return 0;
    if (n === 1) return 1;
    if(map.has(n)){
        return map.get(n);
    }else{
        const num = fib(n - 2) + fib(n - 1);
        map.set(n,num);
        return num % 1000000007;
    }
};
console.log(fib(44))