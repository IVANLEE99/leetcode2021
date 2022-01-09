/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);

  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    let v = ((p1 && p1.val) || 0) + ((p2 && p2.val) || 0) + carry;
    carry = Math.floor(v / 10);
    p3.val = v % 10;
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
    if (p1 || p2) {
      p3.next = new ListNode(0);
      p3 = p3.next;
    }
  }
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3;
};
