/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x + "";
    return _isPalindrome(x);
};
function _isPalindrome(str) {
    let isP = true;
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        if (s !== str[str.length - 1 - i]) {
            isP = false;
            break;
        }
    }
    return isP;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(-10));
console.log(isPalindrome(-101));