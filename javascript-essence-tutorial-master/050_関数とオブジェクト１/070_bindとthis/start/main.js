window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello' + name);
}
const b = a.bind(null,"Tim");
b('Tom');

//bind->thisのオブジェクトを固定、引数を固定。
//現在の関数を作り替えるのではなく、新しくbindによるthisの束縛をされたものを新しく作成する。
