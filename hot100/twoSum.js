// 暴力解法
var twoSum = function (nums, target) {
    let start, end;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((i !== j) && (nums[i] + nums[j]) === target) {
                start = i;
                end = j;
                break;
            }
        }
    }
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    return [min, max];
};
// hash表，储存上次计算后的值
var twoSumHash = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const substract = target - nums[i]
        if (map.has(substract)) {
            return [map.get(substract), i]
        }
        map.set(nums[i], i)
    }
};
console.log(twoSum([-3, 4, 3, 90], 0))
console.log(twoSumHash([-3, 4, 3, 90], 0))