function a(name,name1) {
    console.log('hello ' + name + ' ' +name1);
}

const tim ={name: 'Tim'};

const b = a.bind(tim);

b();
//第二引数に配列
a.apply(tim,['Tim','Bob']);
//第二引数に文字列
a.call(tim ,'Tim','Bob');

const arry =[1,2,3,4,5];
//const result = Math.max.apply(null,arry);
const result = Math.max(...arry);
console.log(result);

