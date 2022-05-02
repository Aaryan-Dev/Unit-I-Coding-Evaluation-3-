// ## **Employee Information**

// **Part 1:** Given a list of Employee data with department and salary, **create a list of key-value pairs from the input**

// **For Example :**

// - **Sample Input**


let employee = ["Sam", "John", "Mark", "Peter", "Simon"];
let department = ["Sales", "Marketting", "Operation", "Finance", "Tech"];
let salary  = [40000, 60000, 50000, 10000, 70000];


     let data = [];
  for( i=0; i<employee.length; i++){
let obj = {};
     obj["name"] = employee[i]; 
     obj["salary"] =  salary[i]
     obj["department"] = department[i]; 

      data.push(obj);
  }
     console.log(data);



  function getEmployeeNames(data) {
     
   for(j=0; j<data.length; j++){
      let Data = data[j]
      console.log(Data.name);
   }
  }
   
getEmployeeNames(data)
    





function getMaxSalaryEmployee(data){

    let maxArr = []
      for(j=0; j<data.length; j++){
           
         maxArr.push(data[j].salary);    
      }
  // console.log(maxArr);

    let max = -Infinity;
       for(k=0; k<maxArr.length; k++){
         if(max<maxArr[k]){
           max = maxArr[k];
         }
       }
    console.log(data[maxArr.indexOf(max)]);
}
getMaxSalaryEmployee(data)
  
