// In a purely prototypal pattern, we dispense with classes.
// We focus instead on the objects. Prototypal inheritance is conceptually simpler than classical 
// inheritance: a new object can inherit the properties of an old object.
// This is perhaps unfamiliar, but it is really easy to understand.
// You start by making a useful object. You can then make many more objects that are like that one.
// The classification process of break- ing an application down into a set of nested abstract classes
// can be completely avoided.


var myMammal = {
  name : 'Herb the Mammal',
  get_name : function () {
    return this.name;
  },
  says : function () {
  return this.saying || '';
  }
};

var mycat = Object.create(myMammal);
mycat.name = 'Henrietta';
mycat.saying = 'meow';
