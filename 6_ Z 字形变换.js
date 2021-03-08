/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let arr = [];
    if (numRows == 1) {
        return s;
    }
    for (let index = 0; index < numRows; index++) {
        const r = numRows;
        if (!arr[index]) {
            arr[index] = []
        }
        let l = Math.ceil(s.length / (numRows + numRows - 2))
        // let l = (numRows + numRows - 2)
        for (let j = 0; j < l; j++) {
            if (index == 0 || index == numRows - 1) {
                arr[index].push(s[index + (numRows + numRows - 2) * j])
            } else {
                let c_index = index + (numRows + numRows - 2) * j;
                arr[index].push(s[c_index]);
                let cc_index = (numRows + numRows - 2) - index + (numRows + numRows - 2) * j;
                arr[index].push(s[cc_index])
            }
        }
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const _arr = arr[i] || [];
        result = result.concat(_arr)
    }
    return result.join('')
};
// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
//       PAHNAPLSIIGYIR

// console.log(convert('PAYPALISHIRING', 3));

// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
//  PINALSIGYAHRPI
console.log(convert('PAYPALISHIRING', 4));
// console.log(convert('AB', 1));
console.log(convert('PAYPALISHIRING', 2));
