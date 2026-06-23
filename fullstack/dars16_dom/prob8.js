// Qavslar to'g'ri yopilganligini tekshiring. Misol: isValid('()[]{}') => true
function isValid(str){
    str.split("")
    for (let i = 0; i<str.length;i++){
        console.log(str[i])
    }
};
isValid('()[]{}')