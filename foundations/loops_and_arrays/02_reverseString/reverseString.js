const reverseString = function(string) {
    let output = "";
    let lastIndex = string.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        output += string[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
