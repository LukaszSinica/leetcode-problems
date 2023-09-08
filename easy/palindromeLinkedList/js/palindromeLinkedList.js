/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numString = ""+x
    var arr = [...numString].reduce((acc, n) => acc.concat(+n), [])
    var left = 0
    var right = arr.length-1
    if(arr.length > 1) {
        while(left<=right) {
            if(right >= 4) {
                if(arr[left] == arr[right]) {
                    console.log('elo')
                    left++
                    right--
                } else {
                    return false
                } 
                if (left+1 == right && arr[left] == arr[right]) {
                    return true
                } else if(left+1 == right && arr[left] != arr[right]) {
                    return false
                }
            } else if(arr[left] === arr[right]){
                return true
            } else {
                return false
            }
        }
    } else {
        return true
    }
};