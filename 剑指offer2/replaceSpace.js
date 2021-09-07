/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
     return s.replaceAll(" ",'%20')
};

console.log(replaceSpace("We are happy."))