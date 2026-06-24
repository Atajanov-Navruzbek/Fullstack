// 2. Ikki son orasidagi tub sonlar
// Topshiriq:
// Ikkita son a va b qabul qilib, a dan b gacha (ikkalasini ham qo'shgan holda) bo'lgan
// barcha tub sonlarni massiv ko'rinishida qaytaruvchi tubSonlar funksiyasini yozing.
// Misollar:
// tubSonlar(2, 10) // [2, 3, 5, 7]
// tubSonlar(10, 20) // [11, 13, 17, 19]
// tubSonlar(8, 10) // []

function tubmi(son){
    if (son <= 1) return false
    for (i = 2; i *i <=n; i++){
        

        if (son %i === 0) return false
    }
    return true
    
}
function tubsonlar(a , b){
 let tublar = [];

 let min = Math.min(a,b)
 let max = Math.max(a,b)

 for (let i = min; i <= max; i++ ){
    if (tubmi(i)){
        console.log(tubmi(i))
        tublar.push(i)
    }
 }
return tublar
}

console.log(tubsonlar(2,20))
console.log(tubmi(4))