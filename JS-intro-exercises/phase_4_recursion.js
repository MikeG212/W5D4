function range(start, end) {
  if (start === end) { 
    return [];
  }
  let r = range(start, end - 1);
  r.push(end - 1);
  return r;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.shift() + sumRec(arr);
}

function exp1(base, n) {
  if (n === 0) {
    return 1;
  }
  
  return base * exp1(base, n - 1);
}

function exp2(base, n) {
  if (n === 0) {
    return 1;
  }
  
  if (n === 1) {
    return base;
  }
  
  if (n % 2 === 0) {
    return exp2(base, (n / 2)) * exp2(base, (n / 2));
  } else {
    return exp2(base, ((n - 1)/ 2)) * exp2(base, ((n - 1)/ 2)) * base;
  }
}

function fib(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  }

  let res_arr = fib(n-1);
  res_arr.push(res_arr.slice(-2).reduce((acc,el) => acc + el));
  return res_arr;
}

function deepDup(arr){
  let res_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res_arr.push(deepDup(arr[i]));
    } else {
      res_arr.push(arr[i]);
    }
  }
  return res_arr;
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  
  let mid = Math.floor(arr.length / 2);
  
  if (arr[mid] === target) {
    return mid;
  }
  
  if (arr[mid] > target) {
    return bsearch(arr.slice(0,mid), target);
  } else {
    let sub_res = bsearch(arr.slice(mid, (arr.length + 1)), target);
    return sub_res === -1 ? -1 : sub_res + mid + 1;
  }
}

function mergesort(arr) {
  if (arr.length === 1) { return arr; }
  
  let mid = Math.floor(arr.length / 2);
  
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left,right);
}

function merge(left, right) {
  const res_arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      
      res_arr.push(right.shift());
    } else {
      let next = left.shift();
      res_arr.push(next);
    }
  }
  
  return res_arr.concat(left).concat(right);
}

function subsets(arr) {
  if (arr.length === 1) { return arr[0]; }
  
  const resArr = []
  
  let val = arr.shift()
  let subRes = subsets(arr)
}



