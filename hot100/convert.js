// Z字形 转换字符串


// 暴力二维数组太蠢

//[参考](https://blog.csdn.net/qq_38537503/article/details/95031638)
// 通过设置down flag
/**
 *  按照numRows 生成该数组，数组每项为z型的一行，
 * 正常每行各添加一个字符，
 * 当从数组索引 0 ，设置down true，进行z型两边添加
 * 当从数组索引为numrows-1，设置down =false，进行z型中间字符添加
 * @param {*} s 
 * @param {*} numRows 
 * @returns 
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    const rows = new Array(numRows).fill('')
    let down = false
    let i = 0 //row number
    for (let c of s) {
        rows[i] += c
        // 如果 i 在中间两行
        if (i === numRows - 1 || i === 0) down = !down
        i += down ? 1 : -1
    }
    return rows.join('')
};


convert("PAYPALISHIRING", 3)
convert("PAYPALISHIRING", 4)