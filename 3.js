function func(){
    let obj={};
    Object.setPrototypeOf(obj, null);
    console.log(obj);
}
func();
