const numberToReversedDigits = number => {
    /*This turns the array into a string, still in the same order
    as before. The split('') means there's nothing separating the digits; 
    in other situations, we'd separate with a comma or dash etc.*/
    let initialArray = (""+number).split('');
    let reversedArray = [];
    /*For loop cycles through the array, starting at the very end.
    It requires i to start at the array's length - 1 (as arrays are zero-indexed)
    and decreases i by 1 until i is 0, 0 being the index of
    the initial array's first element.*/
    for (let i = initialArray.length - 1; i >= 0; i--){
    /*We're still dealing with a string, so parseInt turns the string's index
    into an integer, then adds it to the new array. We're starting
    from the very end of initialArray.*/
        reversedArray[i] = parseInt(initialArray.shift());
    }
    return reversedArray;
};

module.exports = numberToReversedDigits;
