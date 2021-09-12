function thousandSplit(num) {

    //处理小数部分
    const splitString = num.toString().split('.')
    const numArray = Array.from(splitString[0]);
    let index = numArray.length;
    let digit = 0;
    while (index >= 0) {
        if(digit === 3 && index !== 0) {
            digit = 0;
            numArray.splice(index, 0, ',');
        }
        digit++;
        index--
    }
    return numArray.join('') + '.' + splitString[1] ?? ''
}
console.log(thousandSplit(100000.101))