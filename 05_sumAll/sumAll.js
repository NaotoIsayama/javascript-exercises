const sumAll = function(int1, int2) {

    if (typeof int1 !== "number" || typeof int2 !== "number" || int1 < 0 || int2 < 0) {
        return "ERROR"
    };

    let sum = 0;
    let largerInt = Math.max(int1, int2);
    let smallerInt = Math.min(int1, int2);

    for (let i = smallerInt; i <= largerInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
