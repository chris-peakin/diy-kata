const joinNames = namesObj => {
    let newString ='';
    for (let i = 0; i < namesObj.length; i += 1){
        if (i === 0){
            /*Note: {namesObj[i].name} requires [i] before the dot,
            otherwise it's returning undefined. There's confusion between
            dot and bracket notation here. By having [i] before the object's
            property, at least I'm finding the object first (by its index),
            then the name key.*/
            newString += `${namesObj[i].name}`
        } else if (i < (namesObj.length - 1)) {
            newString += `, ${namesObj[i].name}`
        } else if (i = (namesObj.length - 1))  {
            newString += ` & ${namesObj[i].name}`
        }
    }
    return newString;
};

module.exports = joinNames;