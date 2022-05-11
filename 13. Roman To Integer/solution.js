const numerals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
const romanToInt = function(s) {
    return Array.from(s, n => numerals[n])
            .reverse()
            .reduce((sum, value) => {
                //R->L, if value*4 < total, subtract. Numerals scale no smaller than 5.
                return sum + (value * 4 < sum ? -value : value)
            })
};

console.log(romanToInt("III")); //3
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("MMMCMXCIX")); //3999