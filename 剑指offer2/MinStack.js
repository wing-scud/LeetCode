/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.sortStack = [];
    this.stack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
    if (this.sortStack.length === 0 || x <= this.sortStack[this.sortStack.length - 1]) {
        this.sortStack.push(x)
    } else {
        this.sortStack.push(this.sortStack[this.sortStack.length - 1])
    }
    this.stack.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
    const x = this.stack.pop()
    this.sortStack.pop()
    return x
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
    return this.sortStack[this.sortStack.length - 1]
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/