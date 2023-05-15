function a() {
  console.log('hello');
}

a.prop = 0;
a.method = function() {
  console.log('method');
}

//()をつけることによって、関数を実行する。（実行可能なオブジェクトを（）によって実行する。）
a();
a.method();
console.log(a.prop);