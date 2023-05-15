function printEquality(a,b) {
  console.log(a===b);
  console.log(a==b);
}

let a = '1';
let b = 1;

//厳格
console.log(a===b);
//抽象的
console.log(a==b);

let c = true;

printEquality(b,c);

let e = "";
let f = 0;
let g = "0"
let h = null;

printEquality(g,f);
