const sumAll = function(start, end) {
    const array = [];

    if (typeof start === "string" || typeof end === "string") {
        return 'ERROR';
    }

    if (isNaN(start) || isNaN(end)) {
        return 'ERROR';
    }

    const min = Math.min(start, end);
    const max = Math.max(start, end);

    if (min < 0 || max < 0) {
        return 'ERROR';
    }

    if (Number.isInteger(min) === true && Number.isInteger(max) === true) {
        for (let i = min; i <= max; i++) {
            array.push(i);
        }
        return array.reduce((acc, value) => acc + value, 0);
    } else {
        return 'ERROR';
    }
}; 

// Do not edit below this line
module.exports = sumAll;
