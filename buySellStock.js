/**
 * leetcode Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //buy on lowest day, sell on high, return profit
    //run max loop inside min loop
    //compare all posibilities and just use greatest combo?
    var run = prices.length;
    var min = 100;
    var minval = 0;
    var max = 0;
    var maxval = 0;
    var x = [];
    for(var i = 0; i < run; i++){
        if (min > prices[i]){
            min = prices[i];
            minval = i;
            if (max < prices[i] && i>minval){
                max = prices[i];
                maxval = i;
            }
        }

        }
    x.push(min);
    x.push(minval);
    x.push(max);
    x.push(maxval);
    return x;
}
