const removeFromArray = function(array, firstItemToRemove, secondItemToRemove, thirdItemToRemove, fourthItemToRemove) {
    let numArgs = arguments.length - 1;

    for (let i = 1; i <= numArgs; i++) {
        do {
            let indexOfItem = array.indexOf(arguments[i]);
            if (indexOfItem === -1) {
                break;
            }
            array.splice(indexOfItem, 1);
        } while (array.includes(arguments[i]));
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
