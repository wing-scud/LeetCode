/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }
    let maxLength = 0, start = 0;
    for (let i = 0; i < s.length; i++) {
        // 奇数
        const odd = expandString(s, i, i);
        // 偶数
        const even = expandString(s, i, i + 1);
        const temp = Math.max(odd, even);
        console.log({ odd, even })
        if (temp > maxLength) {
            maxLength = temp;
            start = i - Math.ceil(temp / 2) + 1;
        }
    }
    return s.slice(start, maxLength + start)
};
function expandString(string, i, j) {
    const length = string.length;
    let left = i, right = j;
    while (left >= 0 && right < length && (string.charAt(left) === string.charAt(right))) {
        left--;
        right++
    };
    return right - left - 1;
}



// 动态规划


const result = longestPalindrome("abccba")
console.log(result)