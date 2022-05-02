// You are given a string, stored in a variablestr, and the length of the string is stored in a variableN

// The string contains characters only from the below symbols

// '!','@','#','$','%','^','&','*'
// Now every character is mapped to a certain value, such that the mapping starts from 1 and the difference between the values of two characters, is 1. Therefore, the mapping looks as follows
// '!' - 1,'@' - 2,'#' - 3,'$' - 4,'%' - 5,'^' - 6,'&' - 7,'*' - 8

// You have to find the sum of all characters in the string

// For example, consider the value stored inN = 4, andstr = "!@#$", then the required output will be

// 1(value of !) + 2 (value of @) + 3 (value of #) + 4 (value of $) = 10, which is the required output
// Note : The string contains only the symbols mentioned above, and no other characters are present in the string

function mapSymbolsSum(N, str) {
  
    let obj = {
        "!" : 1,
        "@" : 2,
        "#" : 3,
        "$" : 4,
        "%" : 5,
        "^" : 6,
        "&" : 7,
        "*" : 8
    }
       sum = 0; 
      for(i=0; i<str.length; i++){
             for(let k in obj){
         if(str[i]==k){
                 sum = sum + obj[k];
         }
          }
         }
        console.log(sum);
    
  }