/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [];
    let subStr = '';
    let longLength = 0;
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        let {
            isHasStr,
            leftStr
        } = hasStr(subStr, str);
        if (!isHasStr) {
            subStr = subStr + str;
        } else {
            arr.push(subStr);
            subStr = leftStr + str;
        }
        longLength = longLength > subStr.length ? longLength : subStr.length

    }
    return longLength;

};
function hasStr(str, s) {
    let isHasStr = false;
    let leftStr = '';
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e === s) {
            isHasStr = true;
            if (str[i + 1]) {
                leftStr = str.slice(i + 1);
            }
            break;
        }
    }
    return {
        isHasStr,
        leftStr
    };
}
// lengthOfLongestSubstring("pwwkew")
// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("bbbbb")
// lengthOfLongestSubstring("")
// lengthOfLongestSubstring(" ")
lengthOfLongestSubstring("dvdf")

