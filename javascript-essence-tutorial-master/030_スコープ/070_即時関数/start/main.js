function a() {
  console.log('called');
}
a();

let c = (function(){
  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }

  function publicFn() {
    console.log('public is called' + privateVal++);
  }

  return {
    publicVal,
    publicFn
  };
})()

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
console.log(c.publicVal);

(function(){
  console.log('called');
})();