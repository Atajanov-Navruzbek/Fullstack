// Takrorlanmas elementlar O'rta
// Massivdagi takrorlangan elementlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
// Misol: [1,2,2,3,3,3] -> [1,2,3].

function repeat(arr){
        const arr2 = new Set(arr)
    return arr2    
};
console.log(repeat([1,2,2,3,3,3]))