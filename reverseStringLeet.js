/**
 * leetcode
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    sarray = s.split("");
    narray = [];
    for(var i =0; i<s.length;i++){
        narray.push(sarray.pop());
    }
    nstring = narray.join("");
    return nstring;
    ////tried to do a property access swap but found the online interpreter was having issues with it. Opted for converted it to an array instead
    // var newstring = "";
    // var j = 0;
    // for(var i = s.length; i > 0;i--){
    //     newstring[j] = s[i];
    //     j++;
    // }
    // return newstring;
};
