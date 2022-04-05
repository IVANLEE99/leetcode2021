/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

 

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 

提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0; //左指针
  //r 右指针
  let needMap = new Map();
  let res = ``;
  for (const _t of t) {
    let v = needMap.get(_t);
    needMap.set(_t, v ? v + 1 : 1);
  }
  let needType = needMap.size; //needType表示还需要多少个类型的字符
  for (let r = 0; r < s.length; r++) {
    //1 遍历数组 记录各个需要字符串的状态，有则-1， 为0 的时候needType -1 needType为0 的时候是满足
    //2、
    const e = s[r];
    // s = "ADOBECODEBANC", t = "ABC"
    let v = needMap.get(e);
    //如果是需要存在的字符则 将原来的需要的字符-1
    if (needMap.has(e)) {
      needMap.set(e, v - 1);
    }
    //如果需要这个类型的字符已经完全结束则将needType-1
    if (v && v - 1 === 0) {
      needType = needType - 1;
    }
    //如果needType需要的字符类型完全包含则记录substr
    //然后将左指针右移动一位。
    while (needType === 0) {
      let substr = s.substring(l, r + 1);
      // console.log(substr);
      if (!res) {
        res = substr;
      }
      res = substr.length < res.length ? substr : res;
      //如果移动的那一位是原本需要的字符则 needType +1，然后继续外部循环
      let left_e = s[l];
      if (needMap.has(left_e)) {
        needMap.set(left_e, needMap.get(left_e) + 1);
        if (needMap.get(left_e) === 1) {
          needType += 1;
        }
      }
      l = l + 1;
    }
  }
  return res;
};

// console.log(minWindow("ADOBECODEBANC", "ABC"));
