// 10. Harflar chastotasi
// Topshiriq:
// So'z qabul qilib, har bir harf necha marta uchrashini obyekt (object) ko'rinishida
// qaytaruvchi harfChastotasi funksiyasini yozing.
// Misollar:
// harfChastotasi("anna")
// // { a: 2, n: 2 }
// harfChastotasi("aab") // { a: 2, b: 1 }

function harfChastotasi(str){
    const obj ={}
    str.split("")
    for (let i of str){
        if (i in obj){
            obj[i]+=1;
        }else {
            obj[i]=1
        }
    } 
    console.log(obj)
};
harfChastotasi("fjaaj")