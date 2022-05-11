const isPalindrome = function(x) {
    return (Array.from(String(x)).reverse().join("") == x);
};

console.log(isPalindrome(21)) //false
console.log(isPalindrome(121)) //true
console.log(isPalindrome(1221)) //true
console.log(isPalindrome(1212)) //false
console.log(isPalindrome(111222)) //false
console.log(isPalindrome(112211)) //true