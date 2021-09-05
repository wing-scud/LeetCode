// 从后往前计算，下一个数字也必须大于等于前面的，否则就是减号
(function () {
    function romanToInt(string) {
        const map = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        const length = string.length
        let result = 0, index = length-1, last = 0, signal = 1;
        while (index >= 0) {
            const current = map[string.charAt(index)]
            signal = current >= last ? 1 : -1;
            result = result + signal * current;
            index--;
            last = current
        }
        return result
    }
    console.log(romanToInt("III"))
})()