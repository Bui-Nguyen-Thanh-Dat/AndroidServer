exports.add = function(a, b) {
  return (a + b);
};

exports.subtract = function(a, b) {
  return (a - b);
};

exports.multiply = function(a, b) {
  return (a * b);
};

exports.phepchia = function(a, b) {
  if (b==0) {
    return NaN;
  }
  return (a / b);
};


