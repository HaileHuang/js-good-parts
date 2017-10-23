// We now have constructor functions that act like classes, but at the edges,
// there may be surprising behavior. There is no privacy; all properties are public.
// There is no access to super methods.

var Mammal = function (name) {
  this.name = name;
}

Mammal.prototype.getName = function () {
  return this.name;
}

Mammal.prototype.says = function () {
  return this.saying || '';
}

var Cat = function (name) {
  //this.name = name;
  this._super.call(this, name); //set name with super
  this.saying = 'meow';
}

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;
Cat.prototype._super = Mammal;
Cat.prototype.purr = function (n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
}

var myCat = new Cat('Henrietta');
console.log(myCat.says(), myCat.purr(5), myCat.getName());

//Cascade Style
var Cat2 = function (name) {
  this.name = name;
  this.saying = 'meow';
}
.inherits(Mammal)
.method('purr', function (n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
});

var myCat2 = new Cat2('Henrietta');
console.log(myCat2.says(), myCat2.purr(5), myCat2.getName());