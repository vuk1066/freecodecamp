var result;
result = mutation(["hello", "2"]);

/*Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.*/

function mutation(arr) {
  var n = arr[0].indexOf(arr[1]);
  return n;
}

/* Return the remaining elements of an array after chopping off n elements from the head.*/
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

/*a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.*/
function chunkArrayInGroups(arr, size) {
  var loopCounter;
  var newArr = [];

  loopCounter = arr.length / size;
  loopCounter = Math.ceil(loopCounter);

  for (var i = 0, j = 0; i < loopCounter; i++, j += size){
    newArr.push(arr.slice(j, j+size));
  } return newArr;
}

/*Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.*/
function truncateString(str, num) {
  var newString;
  var sliceString = str.slice(0, num);

  if (str.length <= num) {
    return str;
  } else {
    if (sliceString.length <= 3) {
            newString = str.slice(0, num).concat("...");
      return newString;
    } else {
      newString = str.slice(0, num-3).concat("...");
      return newString;
    }   
  }
}

/*Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/
function repeatStringNumTimes(str, num) {
   var concatStr = str;
   if (num > 0){
  	for (var i = num - 1; i >= 0; i--) {
  		str.concat(str);
  	}
  }
  return concatStr;
}

/*Return the length of the longest word in the provided sentence.*/
function findLongestWord(str) {
  var newArray = [];
  str = str.split(' ');

  if (str.length >= 1) {
    for (var i = 0; i < str.length; i++) {
      newArray.push(str[i].length);
  }
  newArray.sort(function(a,b){return b-a;});
  return newArray.shift();
  }
}

/*Check if a string (first argument, str) 
ends with the given target string (second argument, target).*/
function confirmEnding(str, target) {
  var targetLength = target.length; 

  if ( str.substr(-targetLength) == target){
  	return true;
  } else {
    return false;
  }  
}

/*Return true if the given string is a palindrome. Otherwise, return false.*/
function palindrome(str) {
  var regExp = /[^a-z0-9]/ig;
  var newStr = str.replace(regExp, "").toLowerCase();
  var newStrReversed = newStr.split('').reverse().join('').toLowerCase();
  
  if (newStr === newStrReversed) {
  	return true;
  } else {
  	return false;
  }
}

/*Return the factorial of the provided integer.*/
function factorialize(num) {
  if (num <= 1){
    num = 1;
  } else {
    for (var i = num - 1; i >= 1; i-- ){ 
      num *= i;
    }  
  }
  return num;
}

/*Return the provided string with the first letter of each 
word capitalized. Make sure the rest of the word is in lower case.*/
function titleCase(str){
  var newArray = [];
  var joinArray = [];
    var array = str.split(' ');

    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        newArray = array[i].toLowerCase().split('');
        newArray[0] = newArray[0].toUpperCase();
        newArray = newArray.join('');
        joinArray.push(newArray);
      }
      return joinArray.join(' ');
    }
}

/*Reverse the provided string.*/
function reverseString(str) {
  var array = str.split("");
  array.reverse();
  array = array.join("");
  return array;
}

document.getElementById('result').innerHTML = "<p>" + result + "</p>";
console.log(result);