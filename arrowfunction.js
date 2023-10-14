// Arrow Function: Arrow function are a shorter way to write function in javascript. They are specially handy for smalll, simple functions.

const subNumbers = (a, b)=>{
    return a-b;
}

const result = subNumbers(10, 7)
console.log(result)

// const addNumbers = (a, b) => {
//     return a + b;
//   };
  
//   const result = addNumbers(5, 3);
//   console.log(result); 

// Arrow Functions with No Parameters
const anand = () => {
    return "Hello, Anand!";
  };
  
  console.log(anand());