function sayHello() {
  console.log("Hello");
}

function useEffect(fn, arr) {
  fn(); 
  console.log(arr); 
}

useEffect(sayHello, ["a", "b", "c"]);
