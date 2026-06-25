
//  Elementlarni guruhla O'rta
// So'zlar massivini birinchi harfiga ko'ra guruhlang. Misol: ['olma','anor','behi'] ->
// {a:['olma','anor'], b:['behi']}

function group(arr){
    const obj ={a: [],b: []}
    const str ="aouei"
    for (let i of arr){
        if (str.includes(i[0].toLowerCase())){
            obj["a"].push(i)
        }else {
            obj['b'].push(i)
        }
    }
    return obj
};
console.log(group(['olma','anor','behi']))