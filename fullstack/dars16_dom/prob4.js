// 4. Reverse String
// Stringni teskari qilib qaytaring. reverse() metodidan foydalanmang. Misol: reverseString('hello') =>
// 'olleh'

function sayHi(a){
    let b= a.split('')
    let x= b.length
    let result = [];
    for (i=x;i >-1;i--){
        result.push(b[i]);
    }
    a =result.join("");
    return a
};
console.log(sayHi("hello"))