/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let node = head;
    let preNode;
    while (node && node.val !== val ) {
        preNode = node;
        node = node.next;
    }
    preNode?(preNode.next = node.next):(head=node.next);
    return head;
};