//  Yig'indisi K bo'lgan juftlik Qiyin
// Massivdan yig'indisi berilgan K ga teng bo'lgan barcha juftliklarni toping. Misol: ([1,2,3,4],
// 5) -> [[1,4],[2,3]]

function sumTwoson(arr,k){
    let sum = [];
    for (let i =0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]+arr[j]=== k){
                sum.push([arr[i],arr[j]])
                if (sum.includes(arr[j],arr[i])){
                    sum.pop(arr[j],arr[i])
                }
                
            }
        }
    }
    
    return sum
};
console.log(sumTwoson([1,2,3,4],5))