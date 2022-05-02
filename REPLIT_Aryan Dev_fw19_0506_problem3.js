// 1. Write a function that takes one parameter **(i.e array of string)** and returns array of string. **For Example : function firstLetterCapital(arr)**
// 2. The function should perform the given task: Given an array, it will return the array of strings having the first letter of each string will be capital.


let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function firstLetterCapital(arr){

 let newArr = [];
   for(i=0; i<arr.length; i++){
       let bag = "";
        let all = arr[i];
     for(j=0; j<all.length; j++){

      if(j==0){
       for(k=0; k<lower.length; k++ ){
         
       if(all[j]==lower[k]){
         bag = bag + upper[k]
       } 
       } 
     }
       else {
     for(k=0; k<lower.length; k++ ){
         
       if(all[j]==lower[k]){
         bag = bag + lower[k]
       } 
       }
  }
     }
       // console.log(bag);
     newArr.push(bag);
     
   }
     console.log(newArr);
}       

//sample input 1
firstLetterCapital(["masai","school"]);
//sample input 2
firstLetterCapital(["hi", "john", "how", "are", "you"]);



        

         

