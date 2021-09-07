/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        if (map.has(nums[i])) {
            // let value =map.get(num)
            // map.set(nums[i],++value)
            return nums[i]
        } else {
            map.set(nums[i], 1)
        }  
    }
};


console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))