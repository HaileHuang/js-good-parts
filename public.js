Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
}

Object.create = function (o) {
  var F = function () {};
  F.prototype = o;
  return new F();
}

Object.method('superior', function (name) {
  var that = this;
  var method = that[name];
  return function () {
    return method.apply(that, arguments);
  }
})

Function.method('new', function () {
  var that = Object.create(this.prototype);
  var other = this.apply(that, arguments);
  return (typeof other === 'object' && other) || that;
})

Function.method('inherits', function (Parent) {
  this.prototype = new Parent();
  return this;
})