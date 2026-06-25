//  O'rtacha qiymat O'rta
// Massivdagi sonlarning o'rtacha arifmetik qiymatini hisoblang. Misol: [4,8,12] -> 8.

function orta(arr){
     let sum = arr.reduce((acc,x)=>acc+x)
     return sum/arr.length
};
console.log(orta([4,8,12]))