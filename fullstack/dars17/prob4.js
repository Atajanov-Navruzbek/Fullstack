// 4. Anagramma tekshiruvi
// Topshiriq:
// Ikkita so'z qabul qilib, ular anagramma (bir xil harflardan, bir xil sonda tuzilgan) bo'lsa
// true, aks holda false qaytaruvchi anagramma funksiyasini yozing.
// Misollar:
// anagramma("tom", "mot") // true
// anagramma("olma", "lamo") // true
// anagramma("kun", "tun") // false

function anagramma(a,b){
    return a.split("").sort().join("") === b.split("").sort().join("")
    
    
};
console.log(anagramma("tom","mot"))
console.log(anagramma("olma", "lamo"))
console.log(anagramma("kun", "tun"))
