/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let rec = (min, max) => {
    if (min > max) {
      return;
    }
    let mid = Math.floor((min + max) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res > 0) {
      return rec(mid + 1, max);
    } else {
      return rec(min, mid - 1);
    }
  };
  return rec(1, n);
  // let min = 1;
  // let max = n;
  // while (min <= max) {
  //   let mid = Math.floor((min + max) / 2);
  //   let res = guess(mid);
  //   if (res === 0) {
  //     return mid;
  //   } else if (res > 0) {
  //     min = mid + 1;
  //   } else {
  //     max = mid - 1;
  //   }
  // }
};
