function a(){
    let b= 0;
    console.log(b);
}

a();


//ブロックスコープはif文やfor文によって基本的に生成させれる
{
    // ブロックスコープは、let const飲みを使う。
    var c = 1;
    console.log(c);

    function d() {
        console.log('d is called');
    }
    d();
}