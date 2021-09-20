/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    const str =n.toString(2);
    let length=0
    for(let i of str){
        if(i==='1'){
            length++
        }
    }
    return length
};

console.log(hammingWeight(4294967293))