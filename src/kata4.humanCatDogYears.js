const humanCatDogYears = number => {
    let array = [number];
    let catYears = 0;
    let dogYears = 0;
    if (number > 1){
        catYears += (15 + 9 + (4*(number-2)));
        dogYears += (15 + 9 + (5*(number-2)));
    }
    array.push(catYears);
    array.push(dogYears);
    return array
};

module.exports = humanCatDogYears;
