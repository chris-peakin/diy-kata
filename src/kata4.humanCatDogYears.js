const humanCatDogYears = number => {
    /* For a bit of context, the catYears/dogYears are calculated as follows:
    15 and 9 years are added to both cats' and dogs' ages for the first and second human years respectively.
    For the third human year onwards, 4 and 5 years are added to the cats' and dogs' ages respectively. */
    let catYears = 0;
    let dogYears = 0;
    if (number === 0){
        return [number, catYears, dogYears]
    } else if (number === 1){
        catYears += 15;
        dogYears += 15;
        return [number, catYears, dogYears]
    } else if(number === 2){
        //15 + 9 is 24, accounting for the first two human years
        catYears += 24;
        dogYears += 24;
        return [number, catYears, dogYears]
    } else if (number > 2){
        catYears += (15 + 9 + (4*(number-2)));
        dogYears += (15 + 9 + (5*(number-2)));
        return [number, catYears, dogYears]
    } else if (number < 0){
        return 'error!';
    };
};

module.exports = humanCatDogYears;
