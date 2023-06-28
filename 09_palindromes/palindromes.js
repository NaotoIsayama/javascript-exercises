const palindromes = function (string) {
    let punctuation = /[\.,?!\s]/g;
    let reversedString = string.split("").reverse().join();   
    return string.toLowerCase().replace(punctuation, "") === reversedString.toLowerCase().replace(punctuation,"");
};


// Do not edit below this line
module.exports = palindromes;
