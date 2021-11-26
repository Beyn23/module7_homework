function func(x,y){
    for (let key in obj) {
        if (key==y){
            return true;
        }
        else{
            if (obj[key]==y){
                return true;
            }
        }
    }
    return false
};
let obj={
    a:"hze",
    b:"dopustim",
    c:123,
    d:true
}
console.log(func(ob,"a"));