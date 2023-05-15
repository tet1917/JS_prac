let a = null;
let b;
//=で値を入れてあげないと、それはUndifindで定義されるので、nullとなる。
console.log(Boolean(a));
console.log(Boolean(b));


//!->not演算子と言って、aではないときとする。
if(!a){
  console.log('hello');
}else{
  console.log('end');
}
