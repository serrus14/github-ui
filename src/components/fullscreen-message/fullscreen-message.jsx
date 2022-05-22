import React from "react";
import "./fullscreen-message.css";

export const FullscreenMessage = (props) => (
  <div className="fullscreen-message">
    {props.icon}
    <p className="fullscreen-message__text">{props.message}</p>
  </div>
);
