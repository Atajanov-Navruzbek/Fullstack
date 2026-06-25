// Topshiriq:
// Butun son qabul qilib, u tub son (faqat 1 ga va o'ziga bo'linadigan, 1 dan katta son)
// bo'lsa true, aks holda false qaytaruvchi tubmi funksiyasini yozing.
// Misollar:
// tubmi(7) // true
// tubmi(10) // false
// tubmi(1) // false
function tubmi(n){
    let tubson =true
    for (let i = 2;i<n;i++){
        if (n % i == 0){
            tubson=false
        }

    }

    };
tubmi(10)