/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.ceil(Math.sqrt(c))
    
    while(i<=j){
        let sum = i ** 2 + j ** 2
        if(sum < c){
            i++
        }else if(sum > c){
            j--
        }else{
            return true
        }
    }return false
};