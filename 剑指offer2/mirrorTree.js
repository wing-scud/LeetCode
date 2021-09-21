/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree1 = function (root) {
    if(!root) return root
    let quene = [root];
    let mirroTree;
    while (quene.length > 0) {
        let tempQuene = [];
        while (quene.length > 0) {
            mirroTree = mirroTree ? (mirroTree.next = quene.pop()) : quene.pop();
            let tempR;
            if (mirroTree.left) {
                tempQuene.push(mirroTree.left)
            }
            tempR = mirroTree.right;
            mirroTree.right = mirroTree.left
            if (tempR) {
                tempQuene.push(tempR)
            }
            mirroTree.left = tempR
        }
        quene = tempQuene.slice(0)

    }
    return root
};


 var mirrorTree = function (root) {
    if(!root) return root
    function reverseNode(node){
        let tempR = node.right;
        node.right = node.left
        node.left = tempR
     }
    function deepTree(node){
        if(!node) return;
        reverseNode(node)
        deepTree(node.left)
        deepTree(node.right)
     }

     deepTree(root)
     return root;
};



var mirrorTree2 = function (root) {
    if(!root) return root
    let quene = [root];
    let mirroTree;
    while (quene.length > 0) {
            mirroTree = mirroTree ? (mirroTree.next = quene.pop()) : quene.pop();
            let tempR;
            if (mirroTree.left) {
                quene.push(mirroTree.left)
            }
            tempR = mirroTree.right;
            mirroTree.right = mirroTree.left
            if (tempR) {
                quene.push(tempR)
            }
            mirroTree.left = tempR
        }
    return root
};