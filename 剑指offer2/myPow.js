/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const map = new Map()
var myPow = function (x, n) {
    if (n === 1 || n === -1) {
        const sub = n > 0 ? 1 : -1;
        const value = signX(x, sub)
        return value
    }
    let result;
    if(map.has(n)){
        result=map.get(n)
    }else{
        const halfL = Math.floor(n / 2);
        const halfR = n - halfL;
        let l, r;
        if (map.has(halfL)) {
            l = map.get(halfL)
        } else {
            l = myPow(x, halfL)
            map.set(halfL, l)
        }
        if (map.has(halfR)) {
            r = map.get(halfR)
        } else {
            r = myPow(x, halfR)
            map.set(halfR, r)
        }
        result = l * r
        map.set(n, result)
    }
    return result
};

function signX(x, n) {
    if (n === 1) {
        return x
    } else if (n === -1) {
        return 1 / x
    }
}
console.log(myPow(2.1000, 3))