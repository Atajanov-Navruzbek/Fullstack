// 2. Valid Anagram
// Ikki satr bir-birining anagrammasi ekanligini tekshiring. Misol: isAnagram('listen', 'silent') => true

function isAnagram(a,b){
    let arr = a.split("").sort()
    let arr2 = b.split("").sort()
    let count =0;
    
    for (let i= 0; i<arr.length;i++){
        for (let j =0; j<arr2.length;j++){
            arr[i]===arr2[j] ? count++ : false
        }    
    }
    
    if (count === arr.length && count === arr2.length){
        console.log(` ${a} va ${b} = Anagram`)
    }else {
        console.log(` ${a} va ${b} = is not Anagram`)
    } 

}

console.log(isAnagram("losten",'silent'))