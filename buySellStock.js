/**
 * leetcode Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //buy on lowest day, sell on high, return profit
    //run max loop inside min loop
    var run = prices.length;
    var min = 100;
    var minval = 0;
    var max = 0;
    var maxval = 0;
    var x = [];
    for(var i = 0; i < run; i++){  ////compare locations, double check if you can add multiple entries
        if (min > prices[i]){      ////next step would be adding first profitable margin found
            min = prices[i];       ////are there more than one profit margin needed?
            minval = i;
            if (max < prices[i]){
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
