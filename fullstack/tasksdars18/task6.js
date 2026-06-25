// Uzunlikni hisobla Oson
// length xossasidan foydalanmasdan massiv uzunligini sanang (sikl bilan). Misol: [1,2,3,4] ->
// 4.

function lengthArr(arr){
    let count =0;
    for (let i of arr){
        count++
    }
    return count
};
console.log(lengthArr([1,2,3,4]))