/**
 * @param {string} s
 * @return {number}
 * 
 * 示例 1：
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0

输入：s = "(()）" 
输出：4

输入：s = "((())）" 
输出：4
来源：力扣（LeetCode）

max_length
stack = []

链接：https://leetcode-cn.com/problems/longest-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) {
    return 0;
  }
  let stack = [];
  let maxLength = 0;
  let tempStr = "";
  for (let i = 0; i < s.length; i++) {
      const e = s[i];
      if (e==='(') {
          
      }
  }
};
