import React, { useState, useEffect } from "react";

function useDelayedState(defaultValue, delayMs) {
  const [state, setState] = useState(defaultValue);
  
  useEffect(()=>{
    console.log('HQ', defaultValue,delayMs)
  },[])

  const delayedSetState = (newValue) => {
    setTimeout(() => {
      setState(newValue);
    }, delayMs);
  };

  return [state, delayedSetState];
}

export default useDelayedState