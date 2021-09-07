/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const array =[];
    let node =head;
    while(node){
        array.push(node.val);
        node=node.next;
    }
    return array.reverse()
};