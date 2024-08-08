const repeatString = function(str, count) {
    if (count === 0 || str === '') {
        return '';
    } else if (count > 0){
        return str.repeat(count);
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
