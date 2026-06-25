//  Yig'indisi K bo'lgan juftlik Qiyin
// Massivdan yig'indisi berilgan K ga teng bo'lgan barcha juftliklarni toping. Misol: ([1,2,3,4],
// 5) -> [[1,4],[2,3]]

function sumTwoson(arr){
    let sum = 0;
    for (let i of arr){
        console.log(i,[i]+1)
    }
};
console.log(sumTwoson([1,2,3,4],5))