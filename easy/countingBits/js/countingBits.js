/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans = [];
    for (var i = 0; i<= n; i++) {
        ans[i] = (((i >>> 0).toString(2)).split("1").length-1);
    }
    return ans;
};

countBits(5);
