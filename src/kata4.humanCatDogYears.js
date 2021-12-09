const humanCatDogYears = number => {
    let catYears = 0;
    let dogYears = 0;
    if (number === 0){
        return [number, catYears, dogYears]
    } else if (number === 1){
        catYears += 15;
        dogYears += 15;
        return [number, catYears, dogYears]
    } else if(number === 2){
        //15 + 9 is 24
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
