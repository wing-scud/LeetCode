/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    let row = 0, column = matrix[0]?.length - 1??0;
    while (row < matrix.length && column >= 0) {
        const num = matrix[row][column]
        if (num > target) {
            column--
        } else if (num < target) {
            row++
        } else {
            return true;
        }
    }
    return false
};
const array=[

  ]
  
console.log(findNumberIn2DArray(array,1))



