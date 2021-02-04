/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = -10000;
    let currentVal;
    for(let i = 0; i < nums.length; j++){
        currentVal = 0;
        for (let j = i; j < i+k; j++){
            currentVal += nums[j];
        }
        if (currentVal/k > maxAvg){
            maxAvg = currentVal/k;
        }
    }
    return maxAvg;
    
    
};
