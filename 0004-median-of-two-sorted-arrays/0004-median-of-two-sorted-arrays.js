/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr=[...nums1,...nums2];
  arr.sort((a,b)=>a-b)
  let len=arr.length;
  if(len%2==0){
   let sum= arr[len/2]+arr[len/2-1]
   let median=sum/2;
    return median;
  }
  else if(len%2==1){
    let median=arr[Math.floor(len/2)]
    return median;
  }
  else{
    return 0
  }
};