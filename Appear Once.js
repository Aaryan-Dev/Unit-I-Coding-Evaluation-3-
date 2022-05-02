// You are given an array, whose size is stored in a variable with the nameN

// The array is stored in a variable with the namearr

// You have to find the sum of all the elements of the array which are unique.

// For example, consider the value stored inN = 7, and the value stored inarr = [3,5,3,3,8,5,6]. Since there are two numbers that are unique i.e 8 and 6.

// Then the required output will be8+6 = 14, which is the required output

function appearOnce(N, arr) {
  
    let obj = {}
    
    for(i=0; i<arr.length; i++){
        let key = arr[i]
        if(obj[key] === undefined){
            obj[key]=1
        }else{
            obj[key]++
        }
    }
      //   console.log(obj);
      sum = 0;
      for(let k in obj){
          if(obj[k]==1){
              sum = sum + Number(k);
          }
      }
      console.log(sum);
    
  }