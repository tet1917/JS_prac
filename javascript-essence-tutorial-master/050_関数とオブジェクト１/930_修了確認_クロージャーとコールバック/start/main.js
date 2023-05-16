/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
 */
function hello(name) {
  return function () {
    console.log('hello'+name)
  }
}

/**
 * 実行文は以下の通りです。
 */

//setTimeoutは関数を第一引数に取ってあげるから、
//returnでは、関数を返してあげるようなものを作る。
setTimeout(hello('Tom'), 1000);