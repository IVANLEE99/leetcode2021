/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function createNodeByArr(_arr) {
    let lnode = null;
    let arr = [];
    for (let i = 0; i < _arr.length; i++) {
        const node = new ListNode(_arr[i]);
        console.log(_arr[i]);
        arr.push(node);
    }
    for (let index = 0; index < arr.length; index++) {
        if (index == 0) {
            lnode = arr[index]
        }
        if (arr[index + 1]) {
            arr[index].next = arr[index + 1]
        } else {
            arr[index].next = null;
        }
    }
    return lnode;
}
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
var addTwoNumbers = function (l1, l2) {

    let arr1 = [];//第一个整数转换成数组
    let arr2 = [];//第二个整数转换成数组
    let _l1 = l1;
    let _l2 = l2;
    while (_l1) {
        let value = _l1.val;
        arr1.push(value);
        _l1 = _l1.next;
    }

    while (_l2) {
        let value = _l2.val;
        arr2.push(value);
        _l2 = _l2.next;
    }
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    if (length == 0) {
        return new ListNode(0)
    }
    let arr1_add_arr2 = [];
    for (let i = 0; i < length; i++) {
        let v1 = arr1[i] || 0;
        let v2 = arr2[i] || 0;
        let next_v = arr1_add_arr2[i] || 0;
        let v = v1 + v2 + next_v || 0;
        if (v > 9) {
            arr1_add_arr2[i + 1] = 1;
        }
        arr1_add_arr2[i] = v % 10;
    }
    if (arr1_add_arr2.length == 0) {
        return new ListNode(0)
    }
    let arr = arr1_add_arr2;
    return createNodeByArr(arr1_add_arr2);
};

// addTwoNumbers(createNodeByArr([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), createNodeByArr([5, 6, 4]))

addTwoNumbers(createNodeByArr([9, 9, 9, 9, 9, 9, 9]), createNodeByArr([9, 9, 9, 9]))

//转换成数字相加会丢失精确度