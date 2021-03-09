/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    //正则表达式
    let reg = /^[-+]?[0-9]+/
    // console.log(reg.test(s))
    // console.log(s.match(reg));
    let result = s.match(reg);
    if (!result || !result.length) {
        return 0;
    } else {
        let num = Number(result[0]);
        if (num < -(2 ** 31)) {
            return -(2 ** 31);
        } else if (num > (2 ** 31) - 1) {
            return (2 ** 31) - 1
        } else {
            return num;
        }
    }
};
console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("42"))
console.log(myAtoi("+1"))
console.log(myAtoi("  0000000000012345678"))
console.log(myAtoi("+-12"))


