class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }

  forEach(callback) {
    for (let x = Math.ceil(this.from); x <= this.to; x++) {
      callback(x);
    }
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

// Exemplos de uso da classe Range
const r = new Range(1, 3);
console.log(r.includes(2)); // => true: 2 está no intervalo
r.forEach(console.log);      // Imprime 1 2 3
console.log(r.toString());    // Imprime (1...3)
function range(from, to) {
  var r = inherit(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes: function(x) { return this.from <= x && x <= this.to; },
  forEach: function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

var r = range(1, 3);
r.includes(2);
r.forEach(console.log);
console.log(r);