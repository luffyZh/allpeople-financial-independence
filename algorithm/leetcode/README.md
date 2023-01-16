# LeetCode 上的面试题分享

可以不断的分享答案和解题思路。

## 格式

```js
/**
 * @author {作者名} luffyZh
 * @leetcode {Leetcode 解题地址} https://leetcode.cn/problems/two-sum/solution/by-luffyzh-36o9/
 * @description {解题思路描述} 此题其实非常简单，如果不考虑复杂度，采用 O(n2) 的双层循环即可，那么为了降低时间复杂度，需要想的就是空间换时间的方法，具体解法如下：
 * 第一步：for 循环遍历数组，设置临时对象存储，key 为数组值，value 为值对应的下标
 * 第二步：遍历之前判断 target - nums[i] 是否已经在 temp 对象中存在，如果不存在，继续遍历
 * 第三步：如果存在，那么当前值和 temp 中对应的下标就是答案
 * 难点
 * 判断的时候不能使用 temp[target - nums[i]] 进行判断，因为有可能数组下标在对象中的值是0，这样也是非值，因此判断需要采用 typeof temp[target - nums[i]] !== 'undefined'。
 */
```