/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let seen = new Set(nums);
   let result = [];
   for(let i =1;i<=nums.length;i++){
    if(!seen.has(i)){
        result.push(i);
    }
   } 
   return result;
};