// 1. Tub sonni aniqlash
// Topshiriq:
// Butun son qabul qilib, u tub son (faqat 1 ga va o'ziga bo'linadigan, 1 dan katta son)
// bo'lsa true, aks holda false qaytaruvchi tubmi funksiyasini yozing.
// Misollar:
// tubmi(7) // true
// tubmi(10) // false
// tubmi(1) // false

function tubmi(n){
    count =0
    for (let i =1;i<=n;i++){
        if(n%i === 0){
            count++
        }
    }
    count !== 2 ? console.log(false) : console.log(true)
};
tubmi(12)