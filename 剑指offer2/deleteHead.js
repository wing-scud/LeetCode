
var CQueue = function () {
    this.array =[]
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    return this.array.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
     const result =this.array.shift();
     if(typeof result === "undefined"){
         return -1
     }else{
         return result;
     }
};


