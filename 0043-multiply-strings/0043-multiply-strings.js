/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Handle edge cases where one of the numbers is "0"
    if (num1 === "0" || num2 === "0") return "0";

    // Initialize an array to store the result of the multiplication
    let m = num1.length, n = num2.length;
    let result = new Array(m + n).fill(0);

    // Multiply each digit of num1 with each digit of num2
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Convert the result array to a string, skipping leading zeros
    let resultStr = result.join('');
    return resultStr[0] === '0' ? resultStr.slice(1) : resultStr;
};
