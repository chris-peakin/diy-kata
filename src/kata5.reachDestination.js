const reachDestination = (distance, speed) => {
    let distanceOverTime = distance / speed;
    let estimateTime = Math.round(distanceOverTime*2)/2;
    return `I should be there in ${estimateTime} hours.`
};
module.exports = reachDestination;
