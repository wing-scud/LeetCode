// 最长子字符串

/**
 * 滑动窗口 
 * 左边界和右边界
 * 左边界收缩，右边界扩张
 * 顺序：右边界扩张，当map存在重复的值，更新最大值，左边界收缩，收缩至map里不重复
 * 
 */

// 我的
 var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let left = 0, right = 0;
    let max = 0;
    while (right < s.length) {
        const char = s[right];
        if (map.has(char)) {
            max = Math.max(right - left,max)
            left = Math.max(map.get(char),left);
        }
        right++;
        map.set(char, right)
    }
    return Math.max(right - left, max);
};

//  var lengthOfLongestSubstring = function (s) {
//      var set =new Set();
//      let left=0,right=0;
//      while(right<s.length){
//          let char = s[right];
//          if(set.has(char)){
//              set.delete(char);

//          }
//          set.add(char)
//      }
//  }




// var lengthOfLongestSubstring = function(s) {
//     let len = s.length;
//      let result = 0;
   
//      let set = new Set();
//      // 左指针用来收缩窗口
//      let left = 0;
//      // 右指针用来扩张窗口
//      let right = 0;
   
//      while (left < len) {
//        // 如果不重复，就不断扩张窗口，元素添加到set中
//        while (right < len && !set.has(s[right])) {
//          set.add(s[right]);
//          right++;
//        }
//        // 到这里说明有元素重复了，先记录子串长度，然后收缩窗口
//        result = Math.max(result, right - left);
//        // 收缩窗口
//        set.delete(s[left]);
//        left++;
//      }
//      return result;
//    };
const result = lengthOfLongestSubstring("abcbad")
console.log(result)
