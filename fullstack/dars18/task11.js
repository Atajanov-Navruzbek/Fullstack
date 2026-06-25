
//  Massivni saralash O'rta
// Sonlarni o'sish tartibida saralang (o'zingiz algoritm yozing, sort() ishlatmasdan). Misol:
// [3,1,2] -> [1,2,3].
 function sort(arr){
    let arr2= [];
    for (let i = 0; i<arr.length;i++){
        for (let j=1;j<arr.length;i++){
            arr[j]<arr[i] ? arr2.unshift(arr[j]) : arr2.push(arr[i])
        }
    }    
    return arr2    
 };
 console.log(sort([3,1,2,4]))