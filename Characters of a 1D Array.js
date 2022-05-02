// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// Each element of the string contains one of these symbols -'*', '-', '/'

// The symbols represent the following values

// * -> 0
// - -> 1
// / -> 2
// You have to generate a string, such that each symbol is replaced by its corresponding values

// For example, consider the value stored inN = 5, and the value stored instr = */-*/

// Therefore, replacing each value with it's corresponding value, we get02102, which is the required answer

function characters1DArray(N,str){
	
	let obj = {
	    "*" : 0,
        "-" : 1,
        "/" : 2
	}
	    
	    bag = "";
	   for(i=0; i<str.length; i++){
	       for(let k in obj){
	   if(str[i]==k){
	           bag = bag + obj[k];
	   }
	    }
	   }
	    console.log(bag);
}