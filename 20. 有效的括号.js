/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (!s.length || s.length % 2 === 1 || !map[s[0]]) {
    return false
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (map[e]) {
      stack.push(e);
    } else {
      if (!stack.length) {
        return false;
      }
      if (e === map[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

isValid(`()`);
