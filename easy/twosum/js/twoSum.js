/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    sum = 0;
    array = []
    for(var i = 0; i<= nums.length; i++) {
        for(var j = i + 1; j<=nums.length; j++) {
            if(nums[i] + nums[j] === target) {
             array.push(i)
             array.push(j)
             return array   
            }
        }
    }
};