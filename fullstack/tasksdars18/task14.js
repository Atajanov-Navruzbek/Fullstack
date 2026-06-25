// Ko'paytma O'rta
// Massivdagi barcha sonlarning ko'paytmasini hisoblang. Misol: [2,3,4] -> 24.

function fact(arr){
    return arr.reduce((acc,x)=>acc*x)
};
console.log(fact([2,3,4]))

