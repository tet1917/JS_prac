function hello(name = "Tom"){
  //値が渡ってこなかった時のために初期条件を入れる。
  // if(!name){
  //   name = 'Tom';
  // }
  // name = name || 'Tom';
  //AND OR条件による制御
  console.log('Hello ' + name);
}
hello();

// let name = 'Bob';
// if(name) {
//   if(name){
//     hello(name);
//   }
// }
let name = "bob";
name && hello(name);