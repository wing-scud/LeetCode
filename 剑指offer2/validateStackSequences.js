/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const array = [pushed[0]];
    let popIndex = 0, pushIndex = 1, bool = true;
    const length =pushed.length
    while (popIndex < length) {
        if (array[array.length - 1] !== popped[popIndex]) {
            if (pushIndex < length) {
                array.push(pushed[pushIndex])
                pushIndex++;
            } else {
                bool = false
                break
            }

        } else {
            array.pop()
            popIndex++;
        }
    }


    return bool
}


console.log(validateStackSequences([1, 2, 3, 4, 5],
    [4, 5, 3, 2, 1]))