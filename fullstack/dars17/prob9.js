// 9. Eng ko'p takrorlangan element
// Topshiriq:
// Sonlar massivi qabul qilib, eng ko'p marta uchraydigan elementni qaytaruvchi
// engKopTakror funksiyasini yozing. (Bittadan ortiq bo'lsa, birinchi uchraganini
// qaytaring.)
// Misollar:
// engKopTakror([1, 2, 2, 3, 2]) // 2
// engKopTakror([4, 4, 5, 5, 5]) // 5
// engKopTakror([7]) // 7

function maxRepeatNum(arr){
    const map = new Map()
    for(let i of arr){
        if (map.has(i)){
            map.set(i,map.get(i)+1)
        }else {
            map.set(i,1)
        }

    }
    let maxNum =0;
    let maxKey = "";
    for (let [key,value] of map){
        if (maxNum < value){
            maxNum = value;
            maxKey = key;
        }
    }
    return maxKey

};
console.log(maxRepeatNum([1, 2, 2, 3, 2]))
console.log(maxRepeatNum([7]))