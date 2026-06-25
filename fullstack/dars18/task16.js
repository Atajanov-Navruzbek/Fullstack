// Eng ko'p takrorlangan Qiyin
// Massivdagi eng ko'p marta uchragan elementni va uning sonini toping. Misol: [1,2,2,3,2]-> {qiymat:2, soni:3}.

function engKop(arr){
    const map = new Map();

    for (let i of arr){
        if(map.has(i)){
            map.set(i,map.get(i)+1)
        }else {
            map.set(i,1)
        }

    }
    let maxvalue = 0;
    let maxKey = "";

    for (let [key,value] of map){
        if(maxvalue < value){
            maxvalue = value;
            maxKey = key;
        }
    }
    return `Qiymat:${maxKey},Soni:${maxvalue}`

};

console.log(engKop([1,2,2,3,2]))