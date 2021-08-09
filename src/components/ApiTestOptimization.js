import React, { useCallback, useEffect, useState } from "react";
import List from "./List";
const ApiTestOptimization = () => {
  const [state, sestate] = useState(null); //hooks
  //perfect example of useCallback hook
  const changestate = () => {
    sestate(!state);
  };
  //tells that our component is re-rendered;
  //state 
  useEffect(() => {
    console.log("Parent is rendered");
  }, [state]);
  let a = 4;
  const values = () => {
    return [a, a + 1, a + 2];
  };
  return (
    <div>
      <button onClick={changestate}>Change theme</button>
      {/* <List values={values} /> */}
    </div>
  );
};

export default ApiTestOptimization;
