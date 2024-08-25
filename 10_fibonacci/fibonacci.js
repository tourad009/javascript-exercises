const fibonacci = function(number) {
    if (number < 0) return 'OOPS';
    if (number === 0 || number === '0') return 0;
    if (number === 1) return 1;

    if (Number(number)) {
        number = Number(number);
        if (Number.isInteger(number)) {
            let lastVal = 0; // F(0)
            let nextVal = 1; // F(1)
            let finalVal = 1; 
            for (let i = 2; i <= number; i++) {
                finalVal = lastVal + nextVal;
                lastVal = nextVal;
                nextVal = finalVal;
            }
            return finalVal;
        }
    }
};



// Do not edit below this line
module.exports = fibonacci;
