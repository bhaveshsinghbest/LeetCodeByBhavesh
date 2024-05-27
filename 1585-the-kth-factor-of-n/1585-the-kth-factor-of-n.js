/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let a=[]
  for(let i=1;i<=n;i++){
    if(n%i==0){
      a.push(i)
    }
  }
  console.log(a)
  if(k<a.length+1){
    return a[k-1];
  }
  else
    return -1;
    
};