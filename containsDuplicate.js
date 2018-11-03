/**
 * leetcode
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    if(nums.length<=1){
        return false;
    }
    for(var i = 0; i < nums.length; i++){
        if(i==i+1){
            return true;
        }
        else{
            return false;
        }
    }
};
//////something wrong with true false logic
