const joinNames = namesObj => {
    let newString ='';
    for (let i = 0; i < namesObj.length; i += 1){
        if (i < (namesObj.length - 1)){
            newString += `${namesObj[i].name}, `
        } else {
            newString += `& ${namesObj[i].name}`
        };
    }
    return newString;
};

module.exports = joinNames;
