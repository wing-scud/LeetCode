
/**
 * 
 * @param {String} num1 
 * @param {String} num2 
 */
function bigNumAdd(num1, num2) {
    const num1Array = Array.from(num1).reverse();
    const num2Array = Array.from(num2).reverse();
    const maxLength = Math.max(num1Array.length, num2Array.length);
    let digit = 0;
    const array = []
    for (let i = 0; i < maxLength; i++) {
        const result = digit + Number(num2Array[i] ?? 0) + Number(num1Array[i] ?? 0);
        digit = result >= 10 ? 1 : 0;
        array.push(result % 10)
    }
    if (digit) {
        array.push(1)
    }
    return array.reverse().join('')
}

console.log(bigNumAdd('1111', '1111'))