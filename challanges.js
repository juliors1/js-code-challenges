/*-----------------------------------------------------------------------------
Challenge: 1 - twoSum
Difficulty: Easy
Prompt:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4],  target = 6
Output: [1,2]

-----------------------------------------------------------------------------*/
// Your solution for 1 - twoSum here:
const twoSum = function(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var a = i + 1; a < nums.length; a++) {
            if (nums[i] + nums[a] === target) {
                result.push(i);
                result.push(a);
            }
        }
    }
    return result;
};
console.log(twoSum([3,2,4], 6))


  /*-----------------------------------------------------------------------------*/
