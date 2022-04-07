/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // if (s === "Infinity" || s === "-Infinity" || s === "+Infinity") return false
  // return !isNaN(Number(s))
  //小数
  // let reg = /(\+｜-)?(([0-9]+\.)|([0-9]+\.[0-9]+)|(\.[0-9]+)｜([0-9]+))+((e|E)[0-9]+)?/
  // let reg = /(\+｜-)?(([0-9]+\.)|([0-9]+\.[0-9]+)|(\.[0-9]+)｜([0-9]+))+((e|E)[0-9]+)?/
  // let reg = /(\+｜-)?((\d+\.)|(\d+\.\d+)|(\.\d+)｜(\d+))+((e|E)\d+)?/
  // return reg.test(s)
  const graph = {
    0: { blank: 0, sign: 1, ".": 2, digit: 6 },
    1: { digit: 6, ".": 2 },
    2: { digit: 3 },
    3: { digit: 3, e: 4 },
    4: { digit: 5, sign: 7 },
    5: { digit: 5 },
    6: { digit: 6, ".": 3, e: 4 },
    7: { digit: 5 },
  };
  let state = 0;
  for (let c of s.trim()) {
    if (c >= "0" && c <= "9") {
      c = "digit";
    } else if (c === " ") {
      c = "blank";
    } else if (c === "+" || c === "-") {
      c = "sign";
    } else if (c === "e" || c === "E") {
      c = "e";
    }
    state = graph[state][c];
    if (state === undefined) {
      return false;
    }
  }
  if (state == 3 || state === 5 || state === 6) {
    return true;
  }
  return false;
};
