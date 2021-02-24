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
// console.log(twoSum([3,2,4], 6))


  /*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
Challenge: 2 - Add Two Numbers
Difficulty: Medium
Prompt:

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [0], l2 = [0]
Output: [0]
-----------------------------------------------------------------------------*/
// Your solution for 2 - Add Two Numbers here:
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};
