/**Leetcode coding challenge
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    palstr = x.toString();
    if (palstr.length<1){
        return true;
    }
    // else if (palstr%2 === 1){ //odd numbered palindrome
    //     for(var i=0; i<palstr.length; i++){
    //         return palstr;
    //     }
    // }
    else{  //even numbered palindrome
        var half = palstr/2;
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i<half; i++){  //first half of array if even
            arr1[i] = palstr[i];
        }
        for (var i = palstr.length; i<half; i--){ //second half of array if even, going in reverse to hopefully capture palindrome
            arr2[i] = palstr[i];
        }
        for (var i = 0; i==half; i++){ //comparing arrays for identical content
            if (arr1[i] === arr2[i]){
                continue;
            }
            else{
                return false;
            }  
        }
        return true;
    }
};
