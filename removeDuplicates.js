/**
 * from leetcode
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //loop through and if numbers are in order every unique number just add one to var
    for (var i = 0; i < nums.length; i++){
        while(nums[i-1]===nums[i]){
            nums.splice(i,1);
        }
    }
    return nums.length;
};
