const palindromes = function (str) {
    let allPunctuations = [',' , '.' , '?' , '!' , ';' , ':', ' ']; //a better version would be to just list out what we want like all the letters in the alphabet and all numbers possible, then filter everything else
    let newStr = '';
    let compareStr = str.split('').filter((item) => allPunctuations.includes(item)).join(''); //no more punctuations and spaces

    
    newStr = compareStr.split('').reverse().join(''); 
    return (newStr.toLowerCase() === compareStr.toLowerCase()) //so that it works with all lower or upper cases
};

// Do not edit below this line
module.exports = palindromes;
