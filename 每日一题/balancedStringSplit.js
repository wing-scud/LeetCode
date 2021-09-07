/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let start = 0;
    let num = 0;
    let index = 0;
    while (start < s.length) {
        let rNum = 0;
        while ((rNum !== (index - rNum - start) || rNum === 0) &&index<s.length) {
            rNum = s.charAt(index) == "R" ? rNum + 1 : rNum;
            index++;
        }
        num++;
        start = index;
    }
    return num
};

console.log(balancedStringSplit("RLRRLLRLRL"))