
// function runForLongTime(){
//     return "Done"
//  }
 
//  const p = runForLongTime();
 
//  console.log(p);


//  async function runForLongTime(){
//     for(let i = 0; i < 3000000000; i++){}
//    return "Function Finished";
// }

// const p = runForLongTime();
// console.log(p);

// p. then((result)=>{
//     console.log(result);
// });

// async function runForLongTime(){
//     for(let i = 0; i < 3000000000; i++){}

//     throw new Error("Something went wrong...");

//     return "Function Finished";
// }

// const p = runForLongTime();
// console.log(p);

// p. then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

// async function runForLongTime(){
//     for(let i = 0; i < 3000000000; i++){}

//     throw new Error("Something went wrong...");

//     return "Function Finished";
// }

// const p = runForLongTime();
// console.log(p);

// p. then((result)=>{
//     console.log("Promise resolved");
//     console.log(result);
// }).catch((err)=>{
//     console.log("Error caught");
//     console.log(err);
// });

// async function runForLongTime(){
//     for(let i = 0; i < 3000000000; i++){}

//     return "Function Finished";
// }

// const p = runForLongTime();
// console.log(p);

// p. then((result)=>{
//     console.log("Promise resolved");
//     console.log(result);
// }).catch((err)=>{
//     console.log("Error caught");
//     console.log(err);
// });

//Async

// async function runForLongTime(){
//     for (let i = 0; i< 3000000000; i++) {}

//     throw new Error("Something went wrong...");

//     return "Function finished";
//  }

//  (async function (){
//     try{
//         const result = await runForLongTime();
//         console.log(result);
//     }
//     catch(err){
//         console.log(err.message)
//     }
//  })();

// async function apiCall(){
//     return{
//         type: 'API_CALL'
//     }
//  }

//  const response = await apiCall();
//  console.log(response);

// async function apiCall(){
//     return{
//         type: 'API_CALL'
//     }
//  }

// const triggerAPICall = async ()=>{
//  const response = await apiCall();
//  console.log(response);
// }
// triggerAPICall();

// async function apiCall(){
//     const obj = {
//          type: 'API_CALL'
//      }
 
//      return obj;
//   }
 
//  const triggerAPICall = async ()=>{
//   const response = await apiCall();
//   console.log(response);
//  }
//  triggerAPICall();

// async function weatherInfo(city){

//     const cities = ["Pune", "Mumbai", "Delhi", "Nagpur"]

//    const obj = {
//         name: city,
//         temp: Math.floor(Math.random() * 100)
//     }

//     if(cities.includes(city)){
//        return obj;
//     }
//      else{
//         throw new Error("city not found")
//     }
//  }

// const triggerAPICall = async ()=>{
//  const response = await weatherInfo("Pune");
//  console.log(response);
// }
// triggerAPICall();

async function weatherInfo(city){

    const cities = ["Pune", "Mumbai", "Delhi", "Nagpur"]

   const obj = {
        name: city,
        temp: Math.floor(Math.random() * 100)
    }

    if(cities.includes(city)){
       return obj;
    }
     else{
        throw new Error("city not found")
    }
 }

const triggerAPICall = async ()=>{
    let response;
    try{
      response = await weatherInfo("Hadapsar");
    }
    catch(err){
      response = err.message;
    }
    console.log(response)
}
triggerAPICall();