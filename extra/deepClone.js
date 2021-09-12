
// 复杂了
function deepClone1(obj) {
    let result;
    if (Array.isArray(obj)) {
        result = []
        for (let value of obj) {
            result.push(deepClone(value))
        }
    } else if (typeof obj === "object") {
        result = {}
        for (let key in obj) {
            result[key] = deepClone(obj[key])
        }
    } else {
        result = obj
    }
    return result
}

// 简化版
function deepClone(obj) {
    let result = Array.isArray(obj) ? [] : {};
    if (typeof obj === "object") {
        for (let key in obj) {
            result[key] = deepClone(obj[key])
        }
    } else {
        result = obj
    }
    return result
}


const obj1 = { a: 1, b: 2, c: { d: 3 } }
const obj2 = deepClone(obj1)
console.log(obj2)
console.log(obj1 === obj2)





