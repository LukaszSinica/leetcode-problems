/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = s.split("");
    var intArr = changeToInt(arr)
    var sum = 0
    for(var i = 0; i<intArr.length; i++) {
       if(intArr[i] < intArr[i+1]) {
          sum += intArr[i+1] - intArr[i] - intArr[i+1]
       } else {
          sum += intArr[i]
       }
    }
    return sum
 };
 
 var changeToInt = function(arr) {
    for(var i = 0; i < arr.length; i++) {
       switch (arr[i]){
          case 'I':
             arr[i] = 1
             continue;
          case 'V':
             arr[i] = 5
             continue;
          case 'X':
             arr[i] = 10
             continue;
          case 'L':
             arr[i] = 50
             continue;
          case 'C':
             arr[i] = 100
             continue;
          case 'D':
             arr[i] = 500
             continue;
          case 'M':
             arr[i] = 1000
             continue;
       }
    }
    return arr
 }