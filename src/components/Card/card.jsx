import React from "react";
import "./card.css";
import Toggle from "../ToggleMenu/toggle";

const Card = () => {
  return (
    <div className="card">
      <h2 className="title">Trade</h2>
      <div className="toggle">
        <Toggle />
      </div>
    </div>
  );
};

export default Card;
