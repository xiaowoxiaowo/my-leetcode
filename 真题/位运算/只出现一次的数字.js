/**
 * leetcode 136. 只出现一次的数字
 * 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间（O(1)空间复杂度）来实现吗？
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */
// 因为需要O(1)的空间复杂度
// 所以可以使用异或运算符,强啊

// 一个数和 0 做 异或运算等于本身：a^0 = a
// 一个数和其本身做 异或运算等于 0：a^a = 0
// 异或运算满足交换律和结合律：a^b^a = (a^a)^b = 0^b = b

// 因为本题中除了目标元素，其他元素都出现了两次。
// target^x1^x2^x3^x4...^x1^x2^x3^x4... = target^(x1^x1)^(x2^x2)... = target^0 = target
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
};