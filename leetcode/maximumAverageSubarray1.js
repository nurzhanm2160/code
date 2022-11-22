/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = Number.NEGATIVE_INFINITY
    
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = 0; j < k; j++){
            if(!((i+j) > nums.length - 1)){
                sum += nums[i+j]
            } else {
                i = nums.length;
                j = k;
            }
        }
        
        if(sum != 0){
            max = Math.max(max, sum / k)
        }
    }
    
    if(max == Number.NEGATIVE_INFINITY){
        return 0;
    }    
        
    return max;
};
