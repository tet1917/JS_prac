window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}

fn(person.hello)

//オブジェクトのメソッドー＞呼び出し元のオブジェクト
//関数ー＞グローバルオブジェクト