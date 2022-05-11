const longestCommonPrefix = function(strs) {
    let result = "";
    for (let i = 0; i < 200; i++) {
        let curr = result + strs[0][i];
        if (strs.every((word) => word.startsWith(curr))) result = curr;
        else return result;
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"])); //"fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); //""
console.log(longestCommonPrefix(["nautical","nautches","nautch"])); //"naut"
console.log(longestCommonPrefix(["flambeeing", "flambeaus", "flambeing", "flambeau", "flambe"])); //"flambe"