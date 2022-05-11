const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const result = [];
    const parenthesis = new Map([['(',')'],['[',']'],['{','}']]);
    for (let i = 0; i < s.length; i++) {
        if (parenthesis.has(s[i])) result.push(parenthesis.get(s[i]));
        else if (s[i] !== result.pop()) return false;
    }
    return result.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("({})")); //true
console.log(isValid("({}]")); //false