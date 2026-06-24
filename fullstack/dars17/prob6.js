// 6. Armstrong soni
// Topshiriq:
// Uch xonali son qabul qilib, u Armstrong soni (har bir raqamining kubi yig'indisi sonning
// o'ziga teng) bo'lsa true, aks holda false qaytaruvchi armstrong funksiyasini yozing.
// Misollar:
// armstrong(153) // true (1+125+27)
// armstrong(370) // true
// armstrong(100) // false

function isArmstrong(n){
        
        let count = 0
        for (let i of String(n)){
            count += i** 3
        }
        return count === +n
};
console.log(isArmstrong(153))
console.log(isArmstrong(370))
console.log(isArmstrong(100))
