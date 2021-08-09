import React, { useEffect } from "react";

const List = ({ values }) => {
  useEffect(() => {
      //useEffect is some thing which actually tells
      //us that our child component is re-rendered
    console.log("Child component is rendered");
  }, [values]);
  console.log(values());
  return <div></div>;
};

export default List;
