window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        // const a = function(){
        //     console.log('Bye' + this.name);
        // }
        // const a = () => console.log('Bye' +this.name);
        a();
    }
}
//person.hello();

function b(){
    const a = () => console.log('Bye' +this.name);
    a();
}

b();