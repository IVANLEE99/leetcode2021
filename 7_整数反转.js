/**
 * @param {number} x
 * @return {number}
 */
// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var reverse = function (x) {
    if (typeof x != 'number') {
        return;
    }
    let arr = [];
    let flag = x < 0 ? "-" : "";
    x = Math.abs(x);
    while (x / 10 > 0) {
        let r = x % 10;
        arr.push(r);
        x = (x - r) / 10;
    }
    let s = arr.join("");
    s = Number(flag + s);
    if (-(2 ** 31) <= s && s <= 2 ** 31 - 1) {
        return s;
    } else {
        return 0;
    }

};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-120));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
