// 1、移动窗口
// 2、字典判断是否存在重复字符串
// 3、移动 到下一个非重复的字符串的时候需要清空map
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
//   let f = 0; //第一个指针
  let f2 = 0; //第二个指针
  let maxLength = 0;
  let map = new Map();
  for (let f = 0; f < s.length; f++) {
    const e = s[f];
    if (map.has(e) && map.get(e) >= f2) {
      f2 = map.get(e) + 1;
    }
    maxLength = Math.max(maxLength, f - f2 + 1);
    map.set(e, f);
  }
  return maxLength;
};
lengthOfLongestSubstring('abcabcbb')
