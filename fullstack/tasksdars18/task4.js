
//  Massivni teskari aylantir Oson
// reverse() ishlatmasdan massiv elementlarini teskari tartibda qaytaring. Misol: [1,2,3] ->
// [3,2,1]

function reverse(arr){
    let arr1 =[]
    for (let i of arr){
        arr1.unshift(i)
    }
    return arr1
};
console.log(reverse([1,2,3]))