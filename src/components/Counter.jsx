import React, { useState,useEffect } from "react";

const Counter = () => {
  // const [state, setState] = useState(initialState);
  const [counterCount, setCounterCount] = useState(0);


  function handleIncrement() {
    setCounterCount(counterCount);
  }

  function handleDecrement(){
    setCounterCount(counterCount)
  }

  console.log("value is : ",counterCount)

  console.log("rendered your component");
 


  useEffect(()=>{

    handleIncrement()
  },[])


  return (
    <div className="w-screen h-[50vh] flex items-center justify-center bg-slate-600">
      <div className="p-36">
        <h1 id="counter" className="text-5xl font-bold text-center text-white">
          {counterCount}
        </h1>
        <div className="flex items-center gap-x-9 my-12">
          <button
            onClick={handleIncrement}
            className="bg-white text-green-600 font-semibold text-2xl uppercase hover:bg-green-600 active:scale-90 active:shadow-2xl active:shadow-black hover:text-white    py-2 px-5 rounded-md"
          >
            increment +
          </button>
          <button onClick={handleDecrement} className="bg-white text-red-600 font-semibold text-2xl uppercase hover:bg-red-600 active:scale-90 active:shadow-2xl active:shadow-black hover:text-white    py-2 px-5 rounded-md">
            decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
