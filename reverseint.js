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
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x.toString().split("");
    var newnum = [];
    for (var i = num.length-1; i>=0; i--){
        if (num[0] === "-"){
            var neg = true;
        }
        newnum.push(num[i]);
    }
    if (neg === true){
        newnum.unshift(neg);
    }
    var reversednum
    reversednum = parseInt(newnum.join(""));
    return reversednum;
    
//     var digits = (""+x).split("");
//     var reversedarr = [];
//     var temp = 0;

//     for (var i = digits.length-1; i >= 0; i--){
//         temp = digits[i];
//         if (temp = "-"){
//             //store and add before returning
//         }
//         if (temp = "0"){
//             //check if at start or end of int
//         }
//         reversedarr.push(temp);
//     }
//     var reversed = reversedarr.join("");
//     reversed = parseInt(reversed);
//     return reversed;
};
