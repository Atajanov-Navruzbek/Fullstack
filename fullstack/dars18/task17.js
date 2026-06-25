// Massivni aylantirish Qiyin
// Massivni k qadam o'ngga siljiting. Misol: ([1,2,3,4,5], 2) -> [4,5,1,2,3].

function swapping(arr,k){
    for (let i =0;i<k;i++){
            arr.unshift(arr.pop(i))

    }
    return arr

};
console.log(swapping([1,2,3,4,5], 3))