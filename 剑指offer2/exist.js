/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//DFS剪枝
// + 通过上下左右进行递归比较
// + 判断递归终止条件，超出边界或者字符不等，结束递归
// + 通过临时变量存储当前位置字符，将当前字符赋空，保证不重复比较，比较结束，还原

var exist = function (board, word) {
    const height = board.length
    const width = board[0].length;
    const dfs = function (i, j, wordIndex) {
        let result = false
        if (i < 0 || i > height - 1 || j < 0 || j > width - 1) {
            return result
        }
        if (board[i][j] === word[wordIndex]) {
            if (wordIndex === word.length - 1) {
                return true
            }
            let temp = board[i][j]
            board[i][j] = ""
            // 上下左右判断
            result = dfs(i - 1, j, wordIndex + 1) || dfs(i + 1, j, wordIndex + 1) || dfs(i, j - 1, wordIndex + 1) || dfs(i, j + 1, wordIndex + 1)
            board[i][j] = temp
        }
        return result;
    }
    let result = false
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (dfs(i, j, 0)) {
                result = true
            }
        }
    }
    return result;
};
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))

