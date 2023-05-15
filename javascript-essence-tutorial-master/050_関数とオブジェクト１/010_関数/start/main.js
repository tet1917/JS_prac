// const fn=function(a,b) {
//   console.log(a,b);
// }
//同じ名前の関数で実行すると後の方で実行される
// function fn(a,b) {
//   console.log(2);
// }
//fn(1);

//デフォルト値を決めておくこととで、undifinedの時、その値が挿入される。
//意図して値をからとしたいときはundifinedではなく、nullを利用する。
function fn(a, b=1) {
  console.log(arguments);//実引数がargumentsに格納される。
  console.log(a,b);
  return a*5;
}

let c = fn(1,undefined);
console.log(c);






