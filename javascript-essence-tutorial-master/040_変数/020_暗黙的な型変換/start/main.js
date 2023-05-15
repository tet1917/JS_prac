function printTypeAndValue(val){
  console.log(typeof val,val)
}

let a = 0;
printTypeAndValue(a);
//aが文字列に型変換

let b = parseInt('1') + a;
printTypeAndValue(b);
//bが数値に型変換

let c = 15 - b;
printTypeAndValue(c);
//bの文字列が数値に型変換

let d = c - null;
printTypeAndValue(d);
//nullが0という数値に型変換されている。

let e = d - true;
printTypeAndValue(e);
//tureが1という数値に型変換される

