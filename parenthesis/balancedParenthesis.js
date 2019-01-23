const assert = require('assert');

const isParenthesisMatching = (str) => {
  const strArr = str.trim().split('');
  let filteredStrArr = [];

  strArr.forEach((char) => {
    const openParenthesis = char === '(';
    const closeParenthesis = char === ')';
    const openBrackets = char === '[';
    const closeBrackets = char === ']';
    const openCurly = char === '{';
    const closeCurly = char === '}';

    if (
      openParenthesis
      || closeParenthesis
      || openBrackets
      || closeBrackets
      || openCurly
      || closeCurly) filteredStrArr.push(char);
  });

  const filteredStr = filteredStrArr.join('');

  const stack = [];

  const open = {
      '{': '}',
      '[': ']',
      '(': ')'
  };

  const closed = {
      '}': true,
      ']': true,
      ')': true
  }

  for (let i = 0; i < filteredStr.length; i++) {

      const char = filteredStr[i];

      if (open[char]) {
          stack.push(char);
      } else if (closed[char]) {
          if (open[stack.pop()] !== char) return false;
      }
  }
  return stack.length === 0;
}

const testCase01 = isParenthesisMatching('(a[0]+b[2c[6]])(24 + 53)');

try {
  assert.strictEqual(testCase01, true);
} catch(error) {
  console.log(error);
}

