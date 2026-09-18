const sumAll = function(start, end) {
    let output = 0;

    if ((Number.isInteger(start) && start > 0) && (Number.isInteger(end) && end > 0)) {
        if (start < end) {
            for (let i = start; i <= end; i++) {
                output += i;
            }
        } else {
            for (let i = end; i <= start; i++) {
                output += i;
            }
        }
        return output;
    } else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
