function a(name) {
  return 'hello' + name;
}

//１行であればreturn省略、引数が1つであれば、（）を省略
const b = name => 'hello' + name;

console.log (b('Tom'));

//アロー関数は無名関数を簡略化したものだが、thisなどの挙動が変わる。