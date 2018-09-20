Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const res_arr = [];
  this.myEach(el => res_arr.push(callback(el)));
  return res_arr;
};

Array.prototype.myReduce = function(callback, accumulator) {
  if (accumulator === undefined) {
    accumulator = this.shift();
  }
  this.myEach(el => accumulator = callback(accumulator, el));
  
  return accumulator;
};