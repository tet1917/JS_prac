const a = {
  prop:0
}
const b = {
  prop:0
}

//オブジェクト同士を比較するのではなく、オブジェクトの中身を比較してあげる必要がある。
console.log(a===b);

console.log(a.prop === b.prop);

const c = a;

console.log(c===a);