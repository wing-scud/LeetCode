
var spiralOrder = function (matrix) {
    const height = matrix?.length;
    const width = matrix[0]?.length;
    if(!height || !width){
        return matrix
    }
    // 右下左上
    let direction = 0;
    const array=[]
    function print(i, j,direction) {
        array.push(matrix[i][j]);
        matrix[i][j] = null;
        // console.log(direction)
        const result = getNextIndex(i, j, direction)
        if (result) {
            const { nextI, nextJ,direction } =result
            print(nextI, nextJ,direction)
        }

    }
    function getNextIndex(i, j, direction) {
        let nextI = i, nextJ = j;
        let index = 0;
        function loop() {
            if (index > 2) {
                return false
            }
            if (direction === 0 && valid(i, j + 1)) {
                nextJ++;
                return true
            }
            if (direction === 1 && valid(i + 1, j)) {
                nextI++;
                return true
            }
            if (direction === 2 && valid(i, j - 1)) {
                nextJ--;
                return true;
            }
            if (direction === 3 && valid(i - 1, j)) {
                nextI--;
                return true
            }
            index++;
            direction = (direction + 1) % 4;
            return loop();
        }
        if (loop()) {
            return {
                nextI, nextJ,direction
            }
        } else {
            return false
        }

    }

    function valid(i, j) {
        if (i > height - 1 || j > width - 1 || i < 0 || j < 0 || matrix[i][j] === null) {
            return false
        } else {
            return true
        }
    }
    print(0, 0,direction)
    return array;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
