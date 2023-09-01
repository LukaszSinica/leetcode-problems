class Solution {
  List<int> countBits(int n) {
      List<int> ans = [];
      for (var i = 0; i <= n ; i++) {
          ans.add('1'.allMatches(i.toRadixString(2)).length);
      }
      return ans;
  }
}