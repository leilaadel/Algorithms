/**
 * leetcode
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //first doesn't work
    var newarr = [];
    for (var i = 0; i < nums.length; i++){
        var a = nums.indexOf(nums[i], i+1);
        newarr.push(nums.splice(i, 1));
        newarr.push(nums.splice(a-1, 1));
    }
    return newarr;
};
