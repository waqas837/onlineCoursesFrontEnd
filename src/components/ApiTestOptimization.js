import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";

const ApiTestOptimization = () => {
  const refObj = useRef(false);
  const [state, setstate] = useState(null);
  useEffect(() => {
    apicall();
  }, []);
   const apicall = useCallback(async () => {
    if (refObj.current === false) {
      console.log("api fetched");
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      refObj.current = true;
      setstate(data);
    }
  }, []);

  console.log(state);
  return <div> </div>;
};

export default ApiTestOptimization;
