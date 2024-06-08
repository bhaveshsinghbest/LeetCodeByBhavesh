/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;
    let m = Math.abs(x);
    
    while (m > 0) {
        let d = m % 10;
        sum = sum * 10 + d;
        m = Math.floor(m / 10);
    }
    
    if (sum > 0x7FFFFFFF) { // 0x7FFFFFFF is the maximum value for a 32-bit signed integer
        return 0;
    }
    
    return x < 0 ? -sum : sum;
};