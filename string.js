String.prototype.at2 = function (ind) {
  const str = String(this);
  const len = str.length;
  const index = ind < 0 ? len + ind : ind;
  return index >= 0 && ind < len ? str[ind] : undefined;
};

String.prototype.charAt2 = function (ind) {
  const str = String(this);
  const len = str.length;
  return ind >= 0 && ind < len ? str[ind] : "";
};
String.prototype.concat2 = function (...args) {
  const str = String(this);
  let res = str;
  for (let i = 0; i < args.length; ++i) {
    res = res + args[i];
  }
  return res;
};
String.prototype.endsWith2 = function (search, len = this.length) {
  const str = String(this);
  const end = len < str.length ? len : str.length;
  const len2 = search.length;
  for (let i = 0; i < len2; ++i) {
    if (str[end - len2 + i] != search[i]) {
      return false;
    }
  }
  return true;
};
String.prototype.includes2 = function (searchStr, start = 0) {
  const str = String(this);
  const len = str.length;
  if (searchStr == "") {
    return true;
  }
  for (let i = start; i < len; i++) {
    for (let j = 0; j < searchStr.length; j++) {
      if (str[i + j] !== searchStr[j]) {
        break;
      }
      if (j === searchStr.length - 1) {
        return true;
      }
    }
  }
  return false;
};
String.prototype.indexOf2 = function (searchStr, start = 0) {
  const str = String(this);
  const len = str.length;
  if (searchStr == "") {
    return start > str.length ? str.length : start;
  }
  for (let i = start; i < len; i++) {
    for (let j = 0; j < searchStr.length; j++) {
      if (str[i + j] !== searchStr[j]) {
        break;
      }
      if (j === searchStr.length - 1) {
        return i;
      }
    }
  }
  return -1;
};
String.prototype.lastIndexOf2 = function (searchStr, start = this.length) {
  const str = String(this);
  let st = 0;
  if (start > 0) {
    st = start > str.length ? str.length : start;
  }
  if (searchStr == "") {
    return st;
  }
  for (let i = st; i >= 0; --i) {
    for (let j = 0; j < searchStr.length; j++) {
      if (str[i + j] !== searchStr[j]) {
        break;
      }
      if (j === searchStr.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

String.prototype.localeCompare2 = function (compareString) {
  const str = String(this);
  const len1 = str.length;
  const len2 = compareString.length;
  const minLength = Math.min(len1, len2);

  for (let i = 0; i < minLength; i++) {
    if (str[i] < compareString[i]) {
      return -1;
    }
    if (str[i] > compareString[i]) {
      return 1;
    }
  }
  if (len1 < len2) {
    return -1;
  }
  if (len1 > len2) {
    return 1;
  }
  return 0;
};

console.log("a".localeCompare2("A")); // 97>65(1)?
console.log("A".localeCompare2("a")); // 65<97(-1)
console.log("a".localeCompare("A")); //-1?(97>65(1))
console.log("A".localeCompare("a"));

String.prototype.padEnd2 = function (targetLength, padStr = " ") {
  const str = String(this);
  const len = str.length;

  if (targetLength <= len) {
    return str;
  }

  let pad = "";
  for (let i = len; i < targetLength; i++) {
    pad += padStr;
  }

  return str + pad;
};
String.prototype.padStart2 = function (targetLength, padStr = " ") {
  const str = String(this);
  const len = str.length;

  if (targetLength <= len) {
    return str;
  }

  let pad = "";
  for (let i = len; i < targetLength; i++) {
    pad += padStr;
  }

  return pad + str;
};
String.prototype.repeat2 = function (count) {
  const str = String(this);
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
};
String.prototype.replace2 = function (search, replace) {
  const str = String(this);
  const index = str.indexOf(search);

  if (index === -1) {
    return str;
  }

  const before = str.slice(0, index);
  const after = str.slice(index + search.length);
  return before + replace + after;
};
String.prototype.replaceAll2 = function (search, replace) {
  const str = String(this);
  const searchLen = search.length;
  let result = "";

  for (let i = 0; i < str.length; ) {
    if (str.slice(i, i + searchLen) === search) {
      result += replace;
      i += searchLen;
    } else {
      result += str[i];
    }
  }

  return result;
};
String.prototype.slice2 = function (start = 0, end = this.length) {
  const str = String(this);
  const len = str.length;
  const startIndex =
    start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const endIndex = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
  let result = "";
  for (let i = startIndex; i < endIndex; i++) {
    result += str[i];
  }
  return result;
};
String.prototype.split2 = function (element) {
  const result = [];
  let start = 0;
  for (let i = 0; i < this.length; ++i) {
    if (this[i] == element[0]) {
      let temp = this.slice(i, i + element.length);
      if (temp == element) {
        result.push(this.slice(start, i));
        start = i + element.length;
        i = i + element.length;
      }
    }
  }
  result.push(this.slice(start));
  return result;
};
String.prototype.startsWith2 = function (search, start = 0) {
  const str = String(this);
  const len = str.length;
  for (let i = 0; i < search.length; i++) {
    if (str[start + i] !== search[i]) return false;
  }
  return true;
};
String.prototype.toLowerCase2 = function () {
  const str = String(this);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += str[i];
    }
  }

  return result;
};
String.prototype.toString2 = function () {
  return this + "";
};
String.prototype.toUpperCase2 = function () {
  const str = String(this);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += str[i];
    }
  }

  return result;
};
String.prototype.trim2 = function () {
  const str = String(this);
  let start = 0;
  let end = str.length - 1;
  while (str[start] === " " || str[start] === "\n") {
    start++;
  }
  while (str[end] === " " || str[end] === "\n") {
    end--;
  }
  return str.slice(start, end + 1);
};

String.prototype.trimEnd2 = function () {
  const str = String(this);
  let end = str.length - 1;
  while (str[end] === " " || str[end] === "\n") {
    end--;
  }
  return str.slice(0, end + 1);
};

String.prototype.trimStart2 = function () {
  const str = String(this);
  let start = 0;
  while (str[start] === " " || str[start] === "\n") {
    start++;
  }
  return str.slice(start);
};
