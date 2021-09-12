/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
    let res = 0;
    const map = new Map();
    map.set(0, false)
    for (let i = 0; i <= n; i++) {
        const yushu = i % 2;
        const half = Math.floor(i / 2)
        // 如果偶数。等于上一个结果
        if (!yushu) {
            const existed = map.get(half);
            map.set(i, existed)
            res = existed ? res : res + 1;
        } else {
            if (map.has(half)) {
                const exised = map.get(half);
                if (!exised) {
                    const towStringHalf = Number(half).toString(2);
                    const currExisted = (towStringHalf.charAt(towStringHalf.length - 1) === '1')
                    map.set(i, currExisted)
                    res = currExisted ? res : res + 1;
                } else {
                    map.set(i, exised)
                }
            } else {
                const towString = Number(i).toString(2);
                const currExisted = (towString.charAt(towString.length - 1) === 1)
                map.set(i, currExisted)
                res = currExisted ? res : res + 1;
            }
        }
    }
    return res
};
console.log(findIntegers(10000000))

