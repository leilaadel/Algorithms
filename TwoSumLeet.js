/**
 * leet code
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var x = 0;
    var y = 0;
    var arr = [];
    for (var i = 0; i<nums.length; i++){
        for (var j = i+1; j<nums.length; j++){
            x = nums[i];
            y = nums[j];
            if(x+y==target){
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
};
