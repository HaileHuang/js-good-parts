// ES6 Class
class a {
  constructor(x){
    this.instanceVariable = x;
  }
  static staticMethod() {}
  instanceMethod() {}
}
a.staticVariable = 0;

class b extends a{
  constructor(x){
    super(x);
  }
}
const c = new b(100)

console.log(b.staticMethod); // staticMethod
console.log(b.staticVariable); // 0
console.log(b.instanceMethod); // undefined
console.log(b.instanceVariable); // undefined
console.log(c.instanceMethod); // instanceMethod
console.log(c.instanceVariable); // 100

// ES5 pseudo Classical
var a = function (x) {
  this.instanceVariable = x;
  a.staticVariable = 0;
  a.staticMethod = function staticMethod (){};
  a.prototype.instanceMethod = function instanceMethod(){};
};

var b = function (x) {
  this._super.call(this, x);
};
b.prototype = new a;
b.prototype.constructor = b;
b.__proto__ = a; // get a's static method and variable
b.prototype._super = a;

var c = new b(100);

console.log(b.staticMethod); // staticMethod
console.log(b.staticVariable); // 0
console.log(b.instanceMethod); // undefined
console.log(b.instanceVariable); // undefined
console.log(c.instanceMethod); // instanceMethod
console.log(c.instanceVariable); // 100

