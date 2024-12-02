import { useState } from "react";


function Counter() {
  
  //  initialize the state
  const [count, setCount] = useState(0);
  
  // increment the count
  function increment() {
    setCount(count + 1);
  }

  // decrement the count
  function decrement() {
   if(count > 0){
    setCount(count - 1);
   }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button
      onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;