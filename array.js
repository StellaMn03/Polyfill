Array.prototype.at2 = function (index) {
  const arr = Object(this);

  const ind = index < 0 ? arr.length + index : index;
  if (ind < 0 || ind >= arr.length) {
    return undefined;
  }

  return arr[ind];
};
Array.prototype.concat2 = function (...args) {
  const res = [...this];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; ++i) {
        res.push(arg[i]);
      }
    } else {
      res.push(arg);
    }
  }

  return res;
};
Array.prototype.copyWithin2 = function (target, start = 0, end = this.length) {
  const arr = Object(this);
  const len = arr.length;

  let to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
  let from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const final = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
  const count = final - from;

  if (count <= 0) return arr;
  for (let i = 0; i < count; ++i) {
    arr[to + i] = arr[from + i];
  }

  return arr;
};
Array.prototype.entries2 = function () {
  const arr = Object(this);
  let ind = 0;
  const iterator = {
    next: () => {
      if (ind < arr.length) {
        return { value: [ind, arr[ind++]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
  return iterator;
};
Array.prototype.every2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    if (!cb.call(arg, arr[i], i, arg)) {
      return false;
    }
  }
  return true;
};
Array.prototype.fill2 = function (val, start = 0, end = this.length) {
  const arr = Object(this);
  let len = arr.length;
  let startInd = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let endInd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = startInd; i < endInd; ++i) {
    arr[i] = val;
  }
  return arr;
};
Array.prototype.filter2 = function (cb, arg) {
  const arr = Object(this);
  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (cb.call(arg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
Array.prototype.find2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    if (cb.call(arg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};
Array.prototype.findIndex2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    if (cb.call(arg, arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
Array.prototype.findLast2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = arr.length - 1; i >= 0; --i) {
    if (cb.call(arg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};
Array.prototype.findLastIndex2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = arr.length - 1; i >= 0; --i) {
    if (cb.call(arg, arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
Array.prototype.flat2 = function (d = 1) {
  const flat3 = (arr, d) => {
    return d > 0
      ? arr.reduce(
          (acc, val) =>
            acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val),
          []
        )
      : arr.slice();
  };
  return flat3(this, d);
};
Array.prototype.flatMap2 = function (cb, arg) {
  return this.map(cb, arg).flat(1);
};
Array.prototype.forEach2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    cb.call(arg, arr[i], i, arr);
  }
};
Array.prototype.includes2 = function (elm, ind) {
  const arr = Object(this);
  const start = ind < 0 ? Math.max(arr.length + ind, 0) : ind;

  for (let i = start; i < arr.length; ++i) {
    if (arr[i] == elm || (Number.isNaN(arr[i]) && Number.isNaN(elm))) {
      return true;
    }
  }
  return false;
};
Array.prototype.indexOf2 = function (elm, ind = 0) {
  const arr = Object(this);
  let start = ind < 0 ? Math.max(arr.length + ind, 0) : ind;
  for (let i = start; i < arr.length; ++i) {
    if (arr[i] == elm) {
      return i;
    }
  }
  return -1;
};
Array.prototype.join2 = function (op = ",") {
  const arr = Object(this);
  let str = "";
  for (let i = 0; i < arr.length; ++i) {
    str += arr[i];
    if (i < arr.length - 1) {
      str += op;
    }
  }
  return str;
};
Array.prototype.keys2 = function () {
  const arr = Object(this);
  let ind = 0;
  const iterator = {
    next: () => {
      if (ind < arr.length) {
        return { value: ind++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
  return iterator;
};
Array.prototype.lastIndexOf2 = function (elm, ind = this.length - 1) {
  const arr = Object(this);
  let start =
    ind < 0 ? Math.max(ind + arr.length, 0) : Math.min(ind, this.length - 1);
  for (let i = start; i >= 0; --i) {
    if (arr[i] === elm) {
      return i;
    }
  }
  return 1;
};
Array.prototype.map2 = function (cb, arg) {
  const arr = Object(this);
  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(cb.call(arg, arr[i], i, arr));
  }
  return result;
};
Array.prototype.pop2 = function () {
  const arr = Object(this);
  if (arr.length == 0) {
    return undefined;
  }
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
};
Array.prototype.push2 = function (...args) {
  const arr = Object(this);
  for (let i = 0; i < args.length; ++i) {
    arr[arr.length] = args[i];
  }
  return arr.length;
};
Array.prototype.reduce2 = function (cb, val) {
  const arr = Object(this);
  let acc = val != undefined ? val : arr[0];
  let start = val != undefined ? 0 : 1;
  for (let i = start; i < arr.length; ++i) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
};
Array.prototype.reverse2 = function () {
  const arr = Objcet(this);
  for (let i = 0; i < Math.floor(arr.length / 2); ++i) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - 1 - i] = tmp;
  }
  return arr;
};
Array.prototype.shift2 = function () {
  const arr = Object(this);
  if (arr.length == 0) {
    return undefined;
  }
  const first = arr[0];
  for (let i = 0; i < arr.length - 1; ++i) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;
  return first;
};
Array.prototype.slice2 = function (start = 0, end = this.length) {
  const arr = Object(this);
  const len = arr.length;
  const startInd = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const endInd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
  const result = [];

  for (let i = startInd; i < endInd; ++i) {
    result.push(arr[i]);
  }
  return result;
};
Array.prototype.some2 = function (cb, arg) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    if (cb.call(arg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
Array.prototype.sort2 = function (func) {
  const arr = Object(this);
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (func ? func(arr[i], arr[j]) > 0 : String(arr[i]) > String(arr[j])) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
};
Array.prototype.splice2 = function (start, deleteCount, ...items) {
  const arr = Object(this);
  const len = arr.length;
  const result = [];
  start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  if (deleteCount === undefined) {
    deleteCount = len - start;
  }
  if (deleteCount < 0) {
    deleteCount = 0;
  }
  if (deleteCount > len - start) {
    deleteCount = len - start;
  }
  for (let i = 0; i < deleteCount; ++i) {
    result.push(arr[start + i]);
  }
  const end = arr.slice(start + deleteCount);
  arr.length = start;
  for (let i = 0; i < items.length; ++i) {
    arr.push(items[i]);
  }
  for (let i = 0; i < end.length; ++i) {
    arr.push(end[i]);
  }
  return result;
};
Array.prototype.toReversed2 = function () {
  return [...this].reverse2();
};
Array.prototype.toSorted2 = function (func) {
  return [...this].sort2(func);
};
Array.prototype.toSpliced2 = function (start, deleteCount, ...items) {
  const arr = [...this];
  arr.splice2(start, deleteCount, ...items);
  return arr;
};
Array.prototype.toString2 = function () {
  return this.join2(",");
};
Array.prototype.unshift2 = function (...args) {
  const arr = Object(this);
  arr.length += args.length;
  for (let i = arr.length - 1; i >= 0; --i) {
    arr[i + args.length] = arr[i];
  }
  for (let i = 0; i < args.length; ++i) {
    arr[i] = args[i];
  }
  return arr.length;
};
Array.prototype.values2 = function () {
  const arr = Object(this);
  let ind = 0;
  const iterator = {
    next: () => {
      if (ind < arr.length) {
        return { value: arr[ind++], done: false };
      }
      return { value: undefined, done: true };
    },
  };
  return iterator;
};
Array.prototype.with2 = function (ind, val) {
  const arr = Object(this);
  const result = [...arr];
  if (ind >= 0 && ind < arr.length) {
    result[ind] = val;
  }
  return result;
};
