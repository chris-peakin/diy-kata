const reachDestination = (distance, speed) => {
    //For context, distance is in miles and speed in miles per hour
    let distanceOverTime = distance / speed;
    let estimateTime = Math.round(distanceOverTime*2)/2;
    return `I should be there in ${estimateTime} hours.`
};
module.exports = reachDestination;
