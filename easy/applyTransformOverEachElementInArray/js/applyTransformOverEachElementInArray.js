/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    returnedArr = []
    for(var i = 0; i < arr.length; i++) {
        returnedArr.push(fn(arr[i], i))
    }
    return returnedArr
};