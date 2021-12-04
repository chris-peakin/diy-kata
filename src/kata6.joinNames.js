const joinNames = namesObj => {
    let newString ='';
    for (let i = 0; i < namesObj.length; i += 1){
        if (i < (namesObj.length - 1)){
            newString += `${namesObj.name[i]}, `
        } else {
            newString += `& ${namesObj.name[i]}`
        };
    }
    return newString;
};

module.exports = joinNames;
