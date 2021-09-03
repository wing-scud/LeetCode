

// ListNode解法
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let digit = 0;
    const res = new ListNode()
    let processNumber = res;
    while (l1 || l2) {
        let add = (l1?.val??0) + (l2?.val??0)  + digit;
        if (add > 9) {
            digit = Math.floor(add / 10)
        } else {
            digit = 0
        }
        processNumber.val = add % 10;
        l1 = l1?.next
        l2 = l2?.next
        if (l1 || l2) {
            processNumber.next = new ListNode()
            processNumber = processNumber.next
        }
    }
    if (digit !== 0) {
        processNumber.next = new ListNode(digit);
    }
    return res
};



// 直接拿数组做了，但其实是链表ListNode
var addTwoNumbersArray = function (l1, l2) {
    let bigArray, smallArray;
    l2.length > l1.length ? (bigArray = l2, smallArray = l1) : (bigArray = l1, smallArray = l2);
    const minLength = smallArray.length;
    const maxLength = bigArray.length;
    const digit = new Array(minLength + 1).fill(0);
    const result = new Array(maxLength + 1).fill(0);
    for (let i = 0; i < maxLength + 1; i++) {
        if (i < minLength) {
            const add = smallArray[i] + bigArray[i] + digit[i];
            result[i] = add % 10;
            if (add > 9) {
                digit[i + 1] = Math.floor(add / 10)
            }
        } else if (i < maxLength) {
            const add = bigArray[i] + (digit[i] ?? 0)
            result[i] = add % 10;
            if (add > 9) {
                digit[i + 1] = Math.floor(add / 10)
            }
        } else {
            result[i] = digit[i];
            if (result[i] === 0) {
                result.length = result.length - 1
            }
        }
    }

    return result
};
// (function () {
//     const l1 = [2, 4, 3], l2 = [5, 6, 4];
//     // [7,0,8]
//     console.log(addTwoNumbersArray(l1, l2));
// })();
// (function () {
//     const l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
//     //[8,9,9,9,0,0,0,1]
//     console.log(addTwoNumbersArray(l1, l2));
// })()
const l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];

addTwoNumbers(l1, l2)

