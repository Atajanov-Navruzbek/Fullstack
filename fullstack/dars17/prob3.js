// 3. Eng katta umumiy bo'luvchi (EKUB)
// Topshiriq:
// Ikkita musbat butun son qabul qilib, ularning eng katta umumiy bo'luvchisini
// qaytaruvchi ekub funksiyasini yozing.
// Misollar:
// ekub(12, 18) // 6
// ekub(7, 13) // 1
// ekub(20, 5) // 5

function ekub(a,b){
    let arr =[];
    let arr2 = [];
    for (let i=1;i<a;i++){
        if (a%i === 0){
            arr.push(i)
        }
        
    }
    for (let i=1;i<b;i++){
        if (b%i === 0){
            arr2.push(i)
        }
    }
    let arr3=arr.concat(arr2)
    console.log(Math.max(...arr3))
};
ekub(12,18)