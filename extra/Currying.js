

function add(a, b, c) {
    return Array.from(arguments).reduce((preValue, curr) => preValue + curr)
}

function curring(fn) {
    const args = []
    return function () {
        args.push(...arguments)
        if (fn.length === args.length) {
            return fn(...args);
        }
        return arguments.callee;
    }
}
const fn = curring(add)
console.log(fn(1)(2)(3))

function sum(a) {
    const len = arguments.length;
    var value = 0;
    if (len > 1) {
        for (var i = 0; i < arguments.length; i++) {
            value += arguments[i];
        }
        return value;
    }
    else {
        var s = function (b) {
            return sum(a + b);
        }
        s.toString = function () {
            return a;
        }
        return s;
    }
}

console.log(sum(1)(2)(3).toString())