Array.prototype.bubblesort = function(){
  let mixedUp = true;
  while (mixedUp) {
    mixedUp = false;
    for (let i = 0; i < this.length - 1; i++){
      leftEl = this[i];
      rightEl = this[i + 1];
      if (leftEl > rightEl) {
        this[i] = rightEl;
        this[i + 1] = leftEl;
        mixedUp = true;
      }
    }
  }
  
  return this;
};

String.prototype.substrings = function(){
  const res_arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      res_arr.push(this.slice(i,j));
    }
  }
  
  return res_arr;
};