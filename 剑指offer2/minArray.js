
// 二分查找
var minArray = function (numbers) {
    function two(left, right) {
        if(left===right){
            return numbers[left]
        }
        const mid = Math.floor((left + right) / 2)
        // 中间位置数大于右边，代表所求数在二分的右边
        if (numbers[mid] > numbers[right]) {
            return  two(mid+1, right)
        } else if(numbers[mid] < numbers[right]) {
             // 中间位置数小于右边，代表所求数在二分的左边
            return  two(left, mid)
        } else{
            //当中间位置数等于右边 ，无法判断在哪边，缩减范围
            return  two(left, right-1)
        }
    }
  return  two(0,numbers.length-1)
};
console.log(minArray([1,3,3]))