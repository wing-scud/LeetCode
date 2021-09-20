/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function (A, B) {
    if (!B || !A) return false;
    let nodeA = A, nodeB = B;
    let result = resultCurr = false;
    resultCurr = isSub(nodeA, nodeB)
    if (!resultCurr) {
        result = isSubStructure(nodeA.left, nodeB) || isSubStructure(nodeA.right, nodeB)
    }
    return resultCurr || result;
};

function isSub(nodeA, nodeB) {
    if (!nodeA || !nodeB) return false;
    let resultCurr = false;
    if (nodeA.val === nodeB.val) {
        resultCurr = (nodeB.left ? isSub(nodeA.left, nodeB.left) : true) && (nodeB.right ? isSub(nodeA.right, nodeB.right) : true);
        if (resultCurr) {
            return resultCurr
        }
    }
    return false;
}