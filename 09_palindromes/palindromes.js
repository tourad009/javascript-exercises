const palindromes = function (str) {
    str = str.toLowerCase();
    for (let i = 0, j = str.length; i < j;) {
        if (!/^[a-z-0-9]$/i.test(str[i])) {
            i++;
            continue;
        }
        if (!/^[a-z0-9]$/i.test(str[j])) {
            j--;
            continue;
        }
        if (str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
