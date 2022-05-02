// ## **Square Object**

// 1. Create an object with a key called **side**.
// 2. The object must have 2 methods,
//     1. **perimeter:** It will return the perimeter of the square, and
//     2. **area:** It will return the area of square


let obj = {

    side : 20,

    perimeter: function(){
      return 4*this.side 
    },

      area :  function(){
      return this.side*this.side 
      } 
}

let Area = obj.perimeter();

let Perimeter = obj.area();

console.log(Area);
console.log(Perimeter);

        