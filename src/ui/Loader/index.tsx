import React from "react";
import "./style.css";
const Loader = () => {
  return (
    <>
      <div className="loader_container">
        <div className="loader">
          <p style={{ fontFamily: "monospace" }} className="loader_text">
            Loading.......
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
