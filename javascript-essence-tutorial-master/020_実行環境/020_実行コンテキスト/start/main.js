let a= 0;//外部変数
function b(){
//関数コンテキスト
console.log(this,arguments,a);
}
//console.log(a);
b();