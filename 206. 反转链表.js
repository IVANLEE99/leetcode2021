/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    //反转链表
    let temp = p1.next;
    p1.next = p2;
    console.log(p1 && p1.val, p2 && p2.val);
    //双指针循环下去
    p2 = p1;
    p1 = temp;
  }
  return p2;
};
