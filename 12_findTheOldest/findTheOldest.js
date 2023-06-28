const findTheOldest = function(arr) {
    const currDate = new Date();
    let maxAge = 0;
    let oldestPersonIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath) {
            let currAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
            if (currAge > maxAge) {
                maxAge = currAge;
                oldestPersonIndex = i;
            }
        }
        else {
            let currAge = currDate.getFullYear() - arr[i].yearOfBirth;
            if (currAge > maxAge) {
                maxAge = currAge;
                oldestPersonIndex = i;
            }
        }
    }
    return arr[oldestPersonIndex]
}

// Do not edit below this line
module.exports = findTheOldest;
