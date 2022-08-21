import { LoaderContainer } from "./LoaderStyles";
import React from "react";

const Loader = () => {
  return (
    <LoaderContainer>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
