function isBalanced(s) {
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const openingBracket = stack.pop();
      if (openingBrackets.indexOf(openingBracket) !== closingBrackets.indexOf(bracket)) {
        return 'NO';
      } else {
        continue;
      }
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

console.log(isBalanced('(1+(2*{3)}+((8)/4))+1'));
console.log(isBalanced('8*((1*(5+6))*(8/6))'));
