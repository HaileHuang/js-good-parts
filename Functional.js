//The functional pattern has a great deal of flexibility. It requires less effort than the pseudoclassical pattern, 
//and gives us better encapsulation and information hiding and access to super methods.
//If all of the state of an object is private, then the object is tamper-proof. 
//Properties of the object can be replaced or deleted, but the integrity of the object is not compro- mised.
//If we create an object in the functional style, and if all of the methods of the object make no use of this or that, 
//then the object is durable. A durable object is simply a collection of functions that act as capabilities.
//A durable object cannot be compromised. Access to a durable object does not give an attacker the ability to access 
//the internal state of the object except as permitted by the methods.

var mammal = function (spec) {
  var that = {};
  that.get_name = function () { 
    return spec.name;
  };
  that.says = function () {
    return spec.saying || '';
  };
  return that;
};

var cat = function (spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  that.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += '-';
      } 
      s += 'r';
    }
    return s;
  };
  that.get_name = function () {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};

var myCat = cat({name: 'Henrietta'});

var coolcat = function (spec) {
  var that = cat(spec);
  var super_get_name = that.superior('get_name');
  that.get_name = function (n) {
    return 'like ' + super_get_name() + ' baby';
  };
  return that;
};
var myCoolCat = coolcat({name: 'Bix'});
console.log(myCoolCat.get_name());