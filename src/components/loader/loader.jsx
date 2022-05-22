import React from "react";
import "./loader.css";

export const Loader = (props) => (
  <div className={props.fullScreen ? "loader-fullscreen" : ""}>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);
