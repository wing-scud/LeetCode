var isSymmetric = function (root) {
    if (!root) return root
    let quene = [root];
    let node, symmetric = true;
    while (quene.length > 0) {
        let tempQuene = [];
        while (quene.length > 0) {
            node = node ? (node.next = quene.shift()) : quene.shift();
            if (!node)
                continue;
            tempQuene.push(node.left)
            tempQuene.push(node.right)
        }
        let left = 0, right = tempQuene.length - 1;
        while (left <= right) {
            if ((tempQuene[left] === null && tempQuene[right] === null) || tempQuene[left]?.val === tempQuene[right]?.val) {
                left++;
                right--
            } else {
                symmetric = false
                break;
            }

        }
        if (!symmetric) {
            break
        }
        quene = tempQuene.slice(0)
    }
    return symmetric
};
