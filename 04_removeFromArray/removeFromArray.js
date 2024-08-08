const removeFromArray = function(array, valueToRemove1, valueToRemove2, valueToRemove3, valueToRemove4) {

    let filteredArray = [];

    if (Number(valueToRemove1) !== NaN || array.includes(valueToRemove1)) {
        filteredArray = array.filter(item => item !== valueToRemove1);
    } 
    
    if (Number(valueToRemove2) !== NaN || array.includes(valueToRemove2)) {
        filteredArray = filteredArray.filter(item => item !== valueToRemove2);
    }

    if (Number(valueToRemove3) !== NaN || array.includes(valueToRemove3)) {
        filteredArray = filteredArray.filter(item => item !== valueToRemove3);
    }

    if (Number(valueToRemove4) !== NaN || array.includes(valueToRemove4)) {
        filteredArray = filteredArray.filter(item => item !== valueToRemove4);
    }
    
    if ((filteredArray.length >= 0) && (Number(valueToRemove1) !== NaN) && (Number(valueToRemove2) !== NaN) && (Number(valueToRemove3) !== NaN) && (Number(valueToRemove4) !== NaN)) {
        return filteredArray;
    } 
    
    else if ((filteredArray.length >= 0) && array.includes(valueToRemove1) && array.includes(valueToRemove2) && array.includes(valueToRemove3) && array.includes(valueToRemove4)) {
        return filteredArray;
    } 
    
    else {
        return array;
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
