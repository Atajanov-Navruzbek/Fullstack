// Barcha 0 larni massiv oxiriga suring. Misol: moveZeroes([0,1,0,3,12]) => [1,3,12,0,0]

function zeroNext(arr){
    let arr1 =[];
    let arr2= [];
    for (let i of arr){
        if (i === 0){
            arr1.push(i)
        }else {
            arr2.push(i)
        }
    }
    
    console.log(arr2.concat(arr1))
};
zeroNext([0,1,0,3,12])