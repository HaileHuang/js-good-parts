// We can use functions and closure to make modules.
// A module is a function or object that presents an interface but that hides its state and implementation.
// By using functions to produce modules, we can almost completely eliminate our use of global variables,
// thereby mitigating one of JavaScript’s worst features.


var serialMaker = function () {
  var prefix = '';
  var seq = 0;
  return {
    setPrefix: function (p) {
      prefix = p;
    },
    setSeq: function (s) {
      seq = s;
    },
    genSym: function () {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
};

var seqer = serialMaker();
seqer.setPrefix('Q');
seqer.setSeq(1000);
console.log(seqer.genSym());