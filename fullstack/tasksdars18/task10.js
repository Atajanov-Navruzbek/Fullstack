//  Ikkinchi katta son O'rta
// Massivdagi ikkinchi eng katta sonni toping. Misol: [10, 5, 8, 10] -> 8.

function max(arr){
    arr.sort((a,b)=>a-b)
    let arr1 = [];
    const arr2 = new Set(arr)
    arr1.push(...arr2)
    
    return arr1.at(-2)
};
console.log(max([10, 5, 8, 10]))