// 1. Two Sum
// Berilgan nums massivida yig'indisi target ga teng bo'lgan ikkita element indekslarini toping. Misol:
// twoSum([2,7,11,15], 9) => [0,1]

function twoSum(arr,sum){
    for (let i=0; i < arr.length;i++){
        for(let j=i; j<arr.length;j++){
            if (arr[i]+arr[j]==sum){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9))