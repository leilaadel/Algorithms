/**
 * leet code reverse integer problem
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var digits = (""+x).split("");
    var reversedarr = [];
    var temp = 0;

    for (var i = digits.length-1; i >= 0; i--){
        temp = digits[i];
        reversedarr.push(temp);
    }
    var reversed = reversedarr.join("");
    reversed = parseInt(reversed);
    return reversed;
};
