/**
 * @title 两数之和
 * @link https://leetcode.cn/problems/two-sum/
 * @param {Array} nums 
 * @param {number} target 
 */
// ================================== 上面是公共部分，下面是解题部分 =========================== //
/**
 * @author luffyZh
 * @leetcode https://leetcode.cn/problems/two-sum/solution/by-luffyzh-36o9/
 * @description 此题其实非常简单，如果不考虑复杂度，采用 O(n2) 的双层循环即可，那么为了降低时间复杂度，需要想的就是空间换时间的方法，具体解法如下：
 * 第一步：for 循环遍历数组，设置临时对象存储，key 为数组值，value 为值对应的下标
 * 第二步：遍历之前判断 target - nums[i] 是否已经在 temp 对象中存在，如果不存在，继续遍历
 * 第三步：如果存在，那么当前值和 temp 中对应的下标就是答案
 * 难点
 * 判断的时候不能使用 temp[target - nums[i]] 进行判断，因为有可能数组下标在对象中的值是0，这样也是非值，因此判断需要采用 typeof temp[target - nums[i]] !== 'undefined'。
 */
var twoSum_luffyZh = function(nums, target) {
  var temp = {};
  for (let i = 0; i < nums.length; i++) {
      var left = target - nums[i];
      if (typeof temp[left] !== 'undefined') {
          console.log([temp[right], i]);
          return [temp[right], i];
      }
      temp[nums[i]] = i;
  }
};

twoSum_luffyZh([2,7,11,15], 9);

/**
 * 其他人的答案，可以参考如上形式进行添加
 */