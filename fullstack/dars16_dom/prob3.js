// Massivda kamida bitta takrorlanuvchi element mavjudligini aniqlang. Misol:
// containsDuplicate([1,2,3,1]) => true

function containsDuplicate(arr){
    let arr1 = new Set(arr)
    return arr1.size !== arr.length
    
    
};
console.log(containsDuplicate([1,2,4,7,1]))