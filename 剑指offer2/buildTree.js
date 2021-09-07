// 前序遍历
// 先输出当前结点的数据，再依次遍历输出左结点和右结点
// 中序遍历
// 先遍历输出左结点，再输出当前结点的数据，再遍历输出右结点
// 后序遍历
//  先遍历输出左结点，再遍历输出右结点，最后输出当前结点的数据


/**
 * 分治，递归的思想
 * 通过前序找到根节点，然后去中序找到根节点的位置，并依据此位置将中序数组分为 左树和右树
 * 依据左树和右树长度即可确定前序中左树和右树长度，从而将前序的左树、右树划分出来
 * 递归，直到前序，中序数组为[]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    const rootValue = preorder[0];
    const index = inorder.findIndex(value => value === rootValue);
    const node = new TreeNode();
    node.val = rootValue;
    node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index + 1, preorder.length), inorder.slice(index + 1, inorder.length))
    return node
};



// 递归的优化
var buildTree = function (preorder, inorder) {
    const map = new Map();
    inorder.forEach((value, index) => {
        map.set(value, index)
    })
    const getTree = function (preorder, inorder) {
        if (!preorder.length || !inorder.length) return null
        const rootValue = preorder[0];
        const index = map.get(rootValue)
        const node = new TreeNode();
        node.val = rootValue;
        node.left = getTree(preorder.slice(1, index + 1), inorder.slice(0, index))
        node.right = getTree(preorder.slice(index + 1, preorder.length), inorder.slice(index + 1, inorder.length))
        return node
    }
    return getTree(preorder, inorder)
};


