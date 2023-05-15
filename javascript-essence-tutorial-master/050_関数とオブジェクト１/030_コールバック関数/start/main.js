function hello(name){
  console.log('hello'+ name);
}

function by() {
  console.log('bye');
}

function fn(cb){
  cb('Tom');
}
fn(hello);
fn(by);

//関数はオブジェクトなので、他の関数の実引数として渡すことが可能になってくる。
fn(function(name){
  console.log('hello ' + name)
})

setTimeout(hello,2000)