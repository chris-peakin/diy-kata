const numberToReversedDigits = number => {
    let initialArray = (""+number).split('');
    let reversedArray = [];
    for (let i = initialArray.length - 1; i >= 0; i--){
        reversedArray[i] = parseInt(initialArray.shift(), 10);
    }
    return reversedArray;
};

module.exports = numberToReversedDigits;
