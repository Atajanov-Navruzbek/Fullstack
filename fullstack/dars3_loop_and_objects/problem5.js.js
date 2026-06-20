const obj = {
    math : 85,
    eng : 70,
    phys : 50
};
let maxBall=0;
for (let key in obj){
    if (obj[key]>maxBall){
        maxBall=obj[key]
    }
}
    console.log(maxBall)