const reverseString = function(str) {
    let arrStr = [];
    let newArr = [];
    let finalStr;
    for (let i = 0; i < str.length; i++) { 
    //split the string into an array of chars
      arrStr[i] = str[i];
    }

    for (let i = 0; i < str.length; i++) {
        //assign the last character from that old array to the new array
        newArr[i] = arrStr.pop();

        //remove the last character of the old array
        arrStr.splice(arrStr.length, 1);
    }

 
    finalStr = newArr.join(""); //turn the new array into a string and no separator taken

    return finalStr; 

    
};

// Do not edit below this line
module.exports = reverseString;
