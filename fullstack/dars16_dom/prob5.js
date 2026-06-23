// Son palindrome ekanligini tekshiring. Misol: isPalindrome(121) => true

function isPalindrom(n){
    return n === +(String(n).split("").reverse().join(""))
};
console.log(isPalindrom(121))