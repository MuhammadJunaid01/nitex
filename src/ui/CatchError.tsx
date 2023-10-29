import React from "react";
import { useRouteError } from "react-router-dom";

const CatchError = () => {
  const error = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
};
export default CatchError;
