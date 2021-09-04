/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O()
var findMedianSortedArrays = function (nums1, nums2) {
    let result = [], midNumber;
    if (nums1[nums1.length - 1] <= nums2[0]) {
        result = nums1.concat(nums2)
    } else if (nums2[nums2.length - 1] <= nums1[0]) {
        result = nums2.concat(nums1)
    } else {
        let i = 0, j = 0;
        while (i < nums1.length || j < nums2.length) {
            while ((nums1[i] <= nums2[j] || j === nums2.length) && i < nums1.length) {
                result.push(nums1[i])
                i++;
            }
            while ((nums1[i] > nums2[j] || i === nums1.length) && j < nums2.length) {
                result.push(nums2[j])
                j++
            }
        }
    }
    if (result.length % 2 === 0) {
        midNumber = (result[result.length / 2] + result[result.length / 2 - 1]) / 2
    } else {
        midNumber = result[Math.floor(result.length / 2)]
    }
    return midNumber;
};

const result = findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1])
console.log(result)
